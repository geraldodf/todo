import Input from "@/components/template/Input";
import {useState} from "react";
import Task from "@/core/task/Task";
import Button from "@/components/template/Button";
import TaskDto from "@/core/task/TaskDto";
import Title from "@/core/shared/Title";
import Description from "@/core/shared/Description";

interface FormProps {
    taskDto: TaskDto
    cancelled?: () => void
    taskChanged?: (task: Task) => void

}

export default function Form(props: FormProps) {
    const id = props.taskDto?.id
    const [title, setTitle] = useState(props.taskDto?.title ?? '')
    const [description, setDescription] = useState(props.taskDto?.description ?? '')
    return (
        <div>
            <Input text={"Title"} value={title} onChange={setTitle} className={`mb-4`}></Input>
            <Input text={"Description"} value={description} onChange={setDescription} className={`mb-4`}></Input>
            <div className={`flex justify-end mt-6`}>
                <Button onClick={() => {
                    const task = new Task(new Title(title), new Description(description))
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