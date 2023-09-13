interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    onChange?: (valor: any) => void
    className?: string

}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className} `}>
            <label className={`mb-2`}>{props.text}</label>
            <input onChange={e => props.onChange?.(e.target.value)}
                   type={props.type ?? 'text'}
                   value={props.value}
                   readOnly={props.readOnly}
                   className={`border border-blue-500 rounded-lg text-zinc-700
                   focus:outline-none bg-gray-50 px-4 py-2 ${props.readOnly ? '' : 'focus:bg-white'}`}/>
        </div>
    )
}