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
  styleUrls: ['./app.component.css']
})
 export class AppComponent{
  title = 'TestVantino';

  private newTask: Task;

  dropzone1: Task[] = [];

  dropzone2: Task[] = [];

  dropzone3: Task[] = [];
  
  constructor(
   private taskRep: TaskRepositoryService,
   private stageRep: TaskStageRepositoryService) {
    this.newTask = new Task(0, "", 0);
   }

  onCreate() {
    this.taskRep.Create(this.newTask);
  }

  // onMove(box: string, toList: string[]): void {
  //   remove(box, this.dropzone1);
  //   remove(box, this.dropzone2);
  //   remove(box, this.dropzone3);

  //   toList.push(box);
  // }

 

}
