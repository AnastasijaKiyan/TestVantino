import { Task } from "./task";

export interface Repository {
    Create (item: Task): void;
    Get (predicate: ((item: Task) => boolean)): Task[];
    GetById (id: number): Task;
    Update (item: Task): void;
    Delete (item: Task): void;
}
