import Task from "@/core/task/Task";
import TaskRepository from "../core/ports/TaskRepository";
import {DeleteTask, GetAllTasks, SaveTask} from "@/core/task/useCases";

export class TaskFacade {
    constructor(private taskRepo: TaskRepository) {
    }

    async saveTask(task: Task, email: string) {
        return new SaveTask(this.taskRepo).execute(task, email);
    }

    async deleteTask(task: Task, email: string) {
        return new DeleteTask(this.taskRepo).execute(task, email);
    }

    async getAllTasks(email: string) {
        return new GetAllTasks(this.taskRepo).execute(email);
    }
}