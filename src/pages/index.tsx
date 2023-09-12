import Task from "@/core/task/Task";
import Button from "@/components/template/Button";
import {useEffect, useState} from "react";
import useAuth from "@/hooks/UseAuth";
import Layout from "@/components/template/Layout";
import Table from "@/components/template/Table";
import Form from "@/components/template/Form";
import SideBar from "@/components/template/SideBar";
import {core} from "@/facade";
import TaskDto from "@/core/task/TaskDto";

export default function Home() {

    const {user, logout} = useAuth()

    function selectedTask(taskDto: TaskDto) {
        setTaskDto(taskDto)
        setVisible('form')
    }

    async function deletedTask(task: Task) {
        await core.task.deleteTask(task, user.email)
        await getAllTasks()
        setVisible('table')
    }

    function newTask() {
        setTaskDto(new TaskDto('', ''))
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

    const [taskDto, setTaskDto] = useState<TaskDto>(new TaskDto('', ''))
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
                                    className={'mb-4 mt-3 bg-gradient-to-br content-center from-blue-500 to-blue-400'}>
                                    New Task
                                </Button>
                            </div>
                        </>
                    ) : (
                        <Form
                            taskDto={taskDto}
                            cancelled={() => setVisible('table')}
                            taskChanged={saveTask}
                        />
                    )}
                </Layout>
            </div>
        </div>
    )
}