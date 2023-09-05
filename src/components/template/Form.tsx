import Input from "@/components/template/Input";
import {useState} from "react";
import Task from "@/core/models/Task";
import Button from "@/components/template/Button";

interface FormProps {
    Task: Task
    cancelled?: () => void
    taskChanged?: (task: Task) => void

}

export default function Form(props: FormProps) {
    const id = props.Task?.id
    const [title, setTitle] = useState(props.Task?.title ?? '')
    const [description, setDescription] = useState(props.Task?.description ?? '')
    return (
        <div>
            <Input text={"Title"} value={title} onChange={setTitle} className={`mb-4`}></Input>
            <Input text={"Description"} value={description} onChange={setDescription} className={`mb-4`}></Input>
            <div className={`flex justify-end mt-6`}>
                <Button onClick={() => {
                    const task = new Task(title, description)
                    task.id = id
                    props.taskChanged?.(task)
                }}
                        className={`mr-2 bg-gradient-to-br from-blue-500 to-blue-400`}>
                    {id ? 'Edit' : 'Save'}
                </Button>
                <Button onClick={props.cancelled} className={`mr-2 bg-gradient-to-br from-orange-500 to-orange-400`}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}