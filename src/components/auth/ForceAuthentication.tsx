import Image from 'next/image'
import router from 'next/router'
import useAuth from '@/hooks/UseAuth'


export default function ForceAuthentication(props: any) {

    const {user, loading} = useAuth()

    function renderContent() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image width={120} height={120} src='/images/loading.gif' alt='loading'/>
            </div>
        )
    }

    if (!loading && user?.email) {
        return renderContent()
    } else if (loading) {
        return renderLoading()
    } else {
        router.push('/authentication')
        return null
    }
}