import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {SharedModule} from '../../shared/shared.module';
import { CheckPasswordDirective } from './check-password.directive';


@NgModule({
  declarations: [UsersComponent, AddUserComponent, ListUsersComponent, ViewUserComponent, CheckPasswordDirective],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
