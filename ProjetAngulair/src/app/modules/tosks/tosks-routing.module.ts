import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TosksComponent } from './tosks.component';
import {ListUsersComponent} from '../users/list-users/list-users.component';
import {AddUserComponent} from '../users/add-user/add-user.component';
import {ViewUserComponent} from '../users/view-user/view-user.component';
import {ListTasksComponent} from './list-tasks/list-tasks.component';
import {AddTasksComponent} from './add-tasks/add-tasks.component';
import {ViewTasksComponent} from './view-tasks/view-tasks.component';
import {KanbanTasksComponent} from './kanban-tasks/kanban-tasks.component';

const routes: Routes = [ { path: '', component: ListTasksComponent },
  { path: 'add', component: AddTasksComponent },
  { path: 'kanban', component: KanbanTasksComponent},
  { path: 'view/@id', component: ViewTasksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TosksRoutingModule { }
