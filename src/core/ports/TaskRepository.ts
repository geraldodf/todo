import Task from "@/core/task/Task";

export default interface TaskRepository {
    save(task: Task, emailId: string): Promise<Task>
    delete(task: Task, emailId: string): Promise<void>
    getAll(emailId: string): Promise<Task[]>
}