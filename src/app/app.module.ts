import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { TaskStageRepositoryService } from './task-stage-repository.service';
import { TaskRepositoryService } from './task-repository.service';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskRepositoryService, TaskStageRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
