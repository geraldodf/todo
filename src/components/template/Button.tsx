interface ButtonProps {
    className?: string
    children: any
    onClick?: () => void
<<<<<<< HEAD
=======

>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
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