import AuthInput from "@/components/auth/AuthInput"
import useAuth from "@/hooks/UseAuth"
import {useState} from "react"

export default function Authentication() {

    const {register, login, googleLogin} = useAuth()

    const [error, setError] = useState(null)
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function showError(msg: string, timeInSeconds = 5) {
        setError(msg)
        setTimeout(() => setError(null), timeInSeconds * 1000)
    }

    async function submit() {
        try {
            if (mode === 'login') {
                await login(email, password)
            } else {
                await register(email, password)
            }
        } catch (e) {
            showError(e?.message ?? 'Unknown error!')
        }
    }

    return (
        <div className="flex h-screen bg-zinc-700 items-center justify-center">
            <div
                className="m-10 w-full md:w-1/2 lg:w-1/3 border rounded-md p-10 border-zinc-600 bg-zinc-800 shadow-2xl">
                <h1 className={`text-3xl font-bold mb-5`}>
                    {mode === 'login' ? 'Log in to Your Account' : 'Sign Up'}
                </h1>
                {error ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>

                        <span className={`ml-3`}>{error}</span>
                    </div>
                ) : false}
                <AuthInput
                    label="Email"
                    type="email"
                    value={email}
                    valueChanged={setEmail}
                    required
                />
                <AuthInput
                    label="Password"
                    type="password"
                    value={password}
                    valueChanged={setPassword}
                    required
                />

                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    {mode === 'login' ? 'login' : 'register'}
                </button>

                <hr className={`my-6 border-gray-300 w-full`}/>

                <button onClick={googleLogin} className={`
                    w-full bg-red-500 hover:bg-red-400
                    text-white rounded-lg px-4 py-3
                `}>
                    Google Login
                </button>

                {mode === 'login' ? (
                    <p className="mt-8">
                        New here?
                        <a onClick={() => setMode('register')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Sign Up</a>
                    </p>
                ) : (
                    <p className="mt-8">
                        Already have an account
                        <a onClick={() => setMode('login')} className={`
                            text-blue-500 hover:text-blue-700 font-semibold
                            cursor-pointer
                        `}> Log In</a>
                    </p>
                )}
            </div>
        </div>
    )
}