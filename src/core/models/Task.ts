export default class Task {
    id?: string;

    constructor(
        public title: string,
        public description: string,
        public completed: boolean = false
    ) {
    }
}

// TODO implementar value object