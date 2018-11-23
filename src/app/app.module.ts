import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { TaskStageRepositoryService } from './task-stage-repository.service';
import { TaskRepositoryService } from './task-repository.service';
import { DraggableModule } from './draggable/draggble.module';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    DraggableModule
  ],
  providers: [TaskRepositoryService, TaskStageRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
