import TaskRepository from "@/core/ports/TaskRepository";
import Task from "../../Task";

export class DeleteTask {
    constructor(private taskRepo: TaskRepository) {
    }

    async execute(task: Task, emailId: string) {
        return this.taskRepo.delete(task, emailId);
    }
}
