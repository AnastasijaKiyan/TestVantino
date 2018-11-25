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
    if (this.taskArray.length == 0) {
      task.id = 1;      
    } else {
      this.taskArray.forEach(item => {
        if (item.id >= task.id) {
          task.id = item.id + 1;
        }
      })
    }
    this.taskArray.push(task);
    this.updateLocalstorage();
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
    this.updateLocalstorage();
  }

  Delete(task: Task): void {
    let index = this.taskArray.findIndex(item => item.id == task.id);
    this.taskArray.splice(index, 1);
    this.updateLocalstorage();
  }

  constructor() {
    let storageData = localStorage.getItem("TestVantino");
    if (storageData == null) {
      this.taskArray = [];
    } else {
      this.taskArray = JSON.parse(storageData);
    }
  }

  private updateLocalstorage() {
    localStorage.setItem("TestVantino", JSON.stringify(this.taskArray));
  }
}
