<<<<<<< HEAD
import Task from "@/core/task/Task";
=======
import Task from "@/core/models/Task";
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
import Button from "@/components/template/Button";
import {useEffect, useState} from "react";
import useAuth from "@/hooks/UseAuth";
import Layout from "@/components/template/Layout";
import Table from "@/components/template/Table";
import Form from "@/components/template/Form";
import SideBar from "@/components/template/SideBar";
<<<<<<< HEAD
import {core} from "@/facade";
import TaskDto from "@/core/task/TaskDto";
=======
import {core} from "../facade";
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036

export default function Home() {

    const {user, logout} = useAuth()

<<<<<<< HEAD
    function selectedTask(taskDto: TaskDto) {
        setTaskDto(taskDto)
=======
    function selectedTask(task: Task) {
        setTask(task)
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
        setVisible('form')
    }

    async function deletedTask(task: Task) {
        await core.task.deleteTask(task, user.email)
        await getAllTasks()
        setVisible('table')
    }

    function newTask() {
<<<<<<< HEAD
        setTaskDto(new TaskDto('', ''))
=======
        setTask(new Task('', ''))
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
        setVisible('form')
    }

    async function saveTask(task: Task) {
        await core.task.saveTask(task, user.email)
        await getAllTasks()
    }

    async function getAllTasks() {
        await core.task.getAllTasks(user.email).then((tasks) => {
            setTasks(tasks)
            setVisible('table')
        })
    }

    useEffect(() => {
        if (!user) return
        getAllTasks()
    }, [user])

<<<<<<< HEAD
    const [taskDto, setTaskDto] = useState<TaskDto>(new TaskDto('', ''))
=======
    const [task, setTask] = useState<Task>(new Task('', ''))
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
    const [tasks, setTasks] = useState<Task[]>([])
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    return (
        <div>
            <SideBar imageUrl={user?.imageUrl} name={user?.name} logout={logout}></SideBar>
            <div
                className={`flex justify-center ml-64 items-center h-screen bg-gradient-to-r from-zinc-800 to-zinc-700`}>
                <Layout Title="Tasks">
                    {visible === 'table' ? (
                        <>
                            <Table tasks={tasks}
                                   selectedTask={selectedTask}
                                   deletedTask={deletedTask}
                                   saveTask={saveTask}></Table>
                            <div className={`flex justify-end`}>
                                <Button
                                    onClick={newTask}
                                    className={'mb-4 bg-gradient-to-br content-center from-blue-500 to-blue-400'}>
                                    New Task
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Form
<<<<<<< HEAD
                            taskDto={taskDto}
=======
                            Task={task}
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
                            cancelled={() => setVisible('table')}
                            taskChanged={saveTask}
                        />
                    )}
                </Layout>
            </div>
        </div>
    )
}