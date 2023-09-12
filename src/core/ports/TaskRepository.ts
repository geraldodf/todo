<<<<<<< HEAD
import Task from "@/core/task/Task";
=======
import Task from "@/core/models/Task";
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036

export default interface TaskRepository {
    save(task: Task, emailId: string): Promise<Task>
    delete(task: Task, emailId: string): Promise<void>
    getAll(emailId: string): Promise<Task[]>
}