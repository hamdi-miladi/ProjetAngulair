import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TosksRoutingModule } from './tosks-routing.module';
import { TosksComponent } from './tosks.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { KanbanTasksComponent } from './kanban-tasks/kanban-tasks.component';


@NgModule({
  declarations: [TosksComponent, AddTasksComponent, ViewTasksComponent, ListTasksComponent, KanbanTasksComponent],
  imports: [
    CommonModule,
    TosksRoutingModule
  ]
})
export class TosksModule { }
