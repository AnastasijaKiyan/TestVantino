export interface Repository<T> {
    Create (item: T): void;
    Read (predicate: ((item: T) => boolean)): T[];
    Update (item: T): void;
    Delete (item: T): void;
}
