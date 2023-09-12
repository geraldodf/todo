<<<<<<< HEAD
import Task from "@/core/task/Task";
import TaskRepository from "../core/ports/TaskRepository";
import {DeleteTask, GetAllTasks, SaveTask} from "@/core/task/useCases";
=======
import Task from "../core/models/Task";
import {
    DeleteTask,
    GetAllTasks,
    SaveTask,
} from "../core/models/useCase/task";
import TaskRepository from "../core/ports/TaskRepository";
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036

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
<<<<<<< HEAD
}
=======
}
>>>>>>> b6fa5ce1c88d8c24ffa96f29a3fa0b5c38d2d036
