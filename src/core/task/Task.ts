import Description from "@/core/shared/Description";
import Title from "@/core/shared/Title";
import TaskDto from "@/core/task/TaskDto";

export default class Task {
    id?: string;

    constructor(
        public title: Title,
        public description: Description,
        public completed: boolean = false
    ) {
    }

    static toDto(task: Task): TaskDto {
        return new TaskDto(task.id, task.title.value, task.description.value, task.completed)
    }

}