export default class TaskDto {


    constructor(
        public id?: string,
        public title?: string,
        public description?: string,
        public completed: boolean = false
    ) {
    }
}