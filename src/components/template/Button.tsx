interface ButtonProps {
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`
        px-4 py-2 rounded-md ${props.className}
        `}>
            {props.children}
        </button>
    )
}