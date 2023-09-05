interface UserAvatarProps {
    imageUrl: string
}

export default function UserAvatar(props: UserAvatarProps) {
    return (
        <img
            src={props.imageUrl ?? '/images/avatar.svg'}
            alt="User Avatar"
            className={`h-12 w-12 rounded-full m-3 border-2 border-blue-600`}
        />
    )
}