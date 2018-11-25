import { Component } from '@angular/core';
import { TaskStage } from './task-stage';
import { Task } from './task';
import { TaskRepositoryService } from './task-repository.service';
import { TaskStageRepositoryService } from './task-stage-repository.service';

function remove(newTask: Task, taskRep: Task[]) {
  if (taskRep.indexOf(newTask) !== -1) {
    taskRep.splice(taskRep.indexOf(newTask), 1);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestVantino';

  public newTask: Task;

  public currentTask: Task;

  constructor(
    private taskRep: TaskRepositoryService,
    private stageRep: TaskStageRepositoryService) {
    this.CreateNewTask();
  }

  private CreateNewTask() {
    this.newTask = new Task(0, "", 0);
  }

  stageSelected = document.getElementById("stageSelect");

  onCreate() {
    if (this.newTask.title.length < 1 || this.newTask.taskStageId == 0) {
      return;
    }
      this.taskRep.Create(this.newTask)
      this.CreateNewTask();
  }

  onReset() {
    this.CreateNewTask();
  }

  move(task: Task, taskStageId: number): void {
    task.taskStageId = taskStageId;
    this.taskRep.Update(task);
  }

  delete(task: Task): void {
    this.taskRep.Delete(task);
  }
}
