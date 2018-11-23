import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskRepositoryService implements Repository<Task> {
  private taskArray: Task[];

  Create(task: Task): void {
    if (task.id != 0) {
      throw new Error('Incorect Task Id = ' + task.id + ' for creating.');
    }
    let id: number;
    if (this.taskArray.length == 0) {
      id = 1;      
    } else {
      this.taskArray.forEach(item => {
        if (item.id > id) {
          id = item.id + 1;
        }
      })
    }
    task.id = id;
    this.taskArray.push(task);
  }

  Read(predicate: ((Task) => boolean) = null): Task[] {
    if (predicate == null) {
      return this.taskArray;
    } else {
      return this.taskArray.filter(predicate);
    }
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
      new Task( 4, "task4", 3)
   ];
  }
}
