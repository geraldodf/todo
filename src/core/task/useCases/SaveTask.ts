import TaskRepository from "@/core/ports/TaskRepository";
import Task from "@/core/task/Task";

export class SaveTask {
    constructor(private taskRepo: TaskRepository) {
    }

    async execute(task: Task, emailId: string) {
        return this.taskRepo.save(task, emailId)
    }
}