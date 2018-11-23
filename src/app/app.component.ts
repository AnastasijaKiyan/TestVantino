import { Component } from '@angular/core';
import { TaskStage } from './task-stage';
import { Task } from './task';
import { TaskRepositoryService } from './task-repository.service';
import { TaskStageRepositoryService } from './task-stage-repository.service';

function remove(item: string, list: string[]) {
  if (list.indexOf(item) !== -1) {
    list.splice(list.indexOf(item), 1);
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
  
  constructor(
   private taskRep: TaskRepositoryService,
   private stageRep: TaskStageRepositoryService) {
    this.newTask = new Task(0, "", 0);
   }

  onCreate() {
    console.log("Create");
    this.taskRep.Create(this.newTask);
  }

 

}
