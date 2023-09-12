import TaskRepository from "@/core/ports/TaskRepository";

export class GetAllTasks {
    constructor(private taskRepo: TaskRepository) {
    }

    async execute(emailId: string) {
        return this.taskRepo.getAll(emailId);
    }
}
