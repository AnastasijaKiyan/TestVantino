import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskRepositoryService implements Repository<Task> {
  private taskArray: Task[];

  Create(task: Task): void {
    this.taskArray.push(task);
  }

  Read(predicate: ((Task) => boolean)): Task[] {
    return this.taskArray.filter(predicate);
  }

  Update(task: Task): void {
    let index = this.taskArray.findIndex(item => item.id == task.id);
    this.taskArray[index] = task;
  }

  Delete(task: Task): void {
    let index = this.taskArray.findIndex(item => item.id == task.id);
    this.taskArray.splice(index, 1);
  }

  constructor() {
    this.taskArray = [
      new Task( 1, "task1", 1),
      new Task( 2, "task2", 1),
      new Task( 3, "task3", 2),
      new Task( 4, "task3", 3)
   ];
  }
}
