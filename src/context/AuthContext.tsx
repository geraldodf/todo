import User from "@/core/models/User"
import {createContext, useState} from "react"
import route from 'next/router'
import Cookies from 'js-cookie'
import {useEffect} from "react"
import {core} from "../facade";

interface AuthContextProps {
    loading?: boolean
    user?: User | null
    googleLogin?: () => Promise<void>
    logout?: () => Promise<void>
    login?: (email: string, password: string) => Promise<void>
    register?: (email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

function manageCookie(loggedIn: boolean) {
    if (loggedIn) {
        Cookies.set('user-cookie', loggedIn.toString(), {
            expires: 7
        })
    } else {
        Cookies.remove('user-cookie')
    }
}

export function AuthProvider(props: any) {

    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    async function configureSession(user: User | null) {
        if (user?.email) {
            setUser(user)
            manageCookie(true)
            setLoading(false)
        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
        }
    }

    async function googleLogin() {
        try {
            setLoading(true)
            const user = await core.auth.googleLogin()
            await configureSession(user)
            await route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function login(email: string, password: string) {
        try {
            setLoading(true)
            const user = await core.auth.emailAndPasswordLogin(email, password)
            await configureSession(user)
            await route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function register(email: string, password: string) {
        try {
            setLoading(true)
            const user = await core.auth.registerWithEmailAndPasswor(email, password)
            await configureSession(user)
            await route.push('/')

        } finally {
            setLoading(false)
        }
    }

    async function logout() {
        try {
            setLoading(true)
            await core.auth.logout()
            await configureSession(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (Cookies.get('user-cookie')) {
            const cancel = core.auth.observe(configureSession)
            return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user: user,
            loading: loading,
            googleLogin: googleLogin,
            logout,
            login,
            register: register
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;