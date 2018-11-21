import { TaskStage } from "./task-stage";

export class Task {
    constructor(
        public id: number,
        public title: string,
        public stage: TaskStage) { }
}

