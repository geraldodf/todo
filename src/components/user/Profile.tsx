import useAuth from "@/hooks/UseAuth"
import UserAvatar from "./UserAvatar"

interface ProfileProps {
    name: string
    imageUrl: string
}

export default function Profile(props: ProfileProps) {
    const {logout} = useAuth()

    return (
        <div
            className="flex flex-col ml-20 w-64 mr-8 bg-white text-gray-800 rounded-md text-center bg-gradient-to-bl from-zinc-500 to-zinc-600"
            style={{position: 'relative'}}>
            <UserAvatar imageUrl={props.imageUrl}/>
            <p className="mt-2 text-lg font-semibold">{props.name ? props.name : 'Nonexistent Name'}</p>
            <button onClick={logout} className="mt-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
                Exit
            </button>
        </div>
    );
}