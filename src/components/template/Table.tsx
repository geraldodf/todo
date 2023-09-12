<<<<<<< HEAD
import Task from "@/core/task/Task"
import {useEffect, useState} from "react";
import {EditIcon, TrashIcon} from "./Icons";
import TaskDto from "@/core/task/TaskDto";
import Title from "@/core/shared/Title";

interface TableProps {
    tasks: Task[]
    selectedTask?: (taskDto: TaskDto) => void
=======
import Task from "@/core/models/Task"
import {useEffect, useState} from "react";
import {EditIcon, TrashIcon} from "./Icons";

interface TableProps {
    tasks: Task[]
    selectedTask?: (task: Task) => void
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
    deletedTask?: (task: Task) => void
    saveTask?: (task: Task) => void
}

export default function Table(props: TableProps) {

    const displayActions = props.deletedTask || props.selectedTask
    const [tasks, setTasks] = useState<Task[]>(props.tasks)

    useEffect(() => {
        if (props.tasks) {
            setTasks(props.tasks);
        }
    }, [props.tasks]);

    function updateCompleted(taskId: any) {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                task.completed = !task.completed
            }
            return task
        })
        setTasks(updatedTasks)
        props.saveTask?.(updatedTasks.find(task => task.id === taskId)!)
    }

    function renderData() {
        return tasks?.map((task, i) => {
            return (
                <div key={i} className={`xl:w-1/3 md:w-1/2 p-4`}>
                    <div className={`border rounded-lg ${task.completed ? 'bg-zinc-200 line-through' : ''}`}>
                        <div className="p-6">
<<<<<<< HEAD
                            <h2 className={`text-lg text-gray-900 font-medium title-font mb-2`}>{task.title.value}</h2>
                            <p className="leading-relaxed text-base">{task.description.value}</p>
=======
                            <h2 className={`text-lg text-gray-900 font-medium title-font mb-2`}>{task.title}</h2>
                            <p className="leading-relaxed text-base">{task.description}</p>
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            {displayActions ? renderActions(task) : false}
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => updateCompleted(task.id)}
                                className={`w-5 h-5 rounded-full lg  p-1 m-1 text-blue-600 bg-gray-100 border-gray-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-3`}
                            />
                        </div>
                    </div>
                </div>
            )
        })
    }

    function renderActions(task: Task) {
        return (
            <span className={`flex justify-center`}>
                {props.selectedTask ? (
                    <button onClick={() => {
<<<<<<< HEAD
                        props.selectedTask?.(Task.toDto(task))
=======
                        props.selectedTask?.(task)
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
                    }} className={`text-green-600 rounded-full hover:bg-zinc-50 p-1 m-1`}>
                        {EditIcon}
                    </button>
                ) : false}

                {props.deletedTask ? (
                    <button onClick={() =>
                        props.deletedTask?.(task)
                    } className={` text-red-600 rounded-full hover:bg-zinc-50 p-1 m-1`}>
                        {TrashIcon}
                    </button>
                ) : false}
            </span>
        )
    }

    return (
        <section className="text-gray-600">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Organize your daily
                        tasks</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">This is a great way for you to organize
                        your daily tasks and stay organized with tasks completed and not completed during your everyday
                        life.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {renderData()}
                </div>
            </div>
        </section>
    )
}