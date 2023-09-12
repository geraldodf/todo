import ForceAuthentication from "../auth/ForceAuthentication";
import Title from "./Title";

interface LayoutProps {
    Title: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <ForceAuthentication>
            <div className={`flex flex-col w-2/3 ml-20 bg-zinc-900 rounded-md text-center`}>
                <Title>{props.Title}</Title>
                <div className={`p-6`}>
                    {props.children}
                </div>
            </div>
        </ForceAuthentication>
    )
}