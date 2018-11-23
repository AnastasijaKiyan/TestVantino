import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { TaskStage } from './task-stage';

@Injectable({
  providedIn: 'root'
})
export class TaskStageRepositoryService implements Repository<TaskStage> {
  private taskStageArray:TaskStage[];

  Create(taskStage: TaskStage): void {
    throw new Error("Method not implemented.");
  }

  Update(taskStage: TaskStage): void {
    throw new Error("Method not implemented.");
  }

  Delete(taskStage: TaskStage): void {
    throw new Error("Method not implemented.");
  }

  Read(predicate: ((TaskStage) => boolean) = null): TaskStage[] {
    if (predicate == null) {
      return this.taskStageArray;
    } else {
      return this.taskStageArray.filter(predicate); 
    }
  }

  constructor() { 
    this.taskStageArray = [
      new TaskStage(1, "toDo"),
      new TaskStage(2, "inProgress"),
      new TaskStage(3, "done")
    ]
  }
}
