import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) }, { path: 'projects', loadChildren: () => import('./modules/projects/projects.module').then(m => m.ProjectsModule) }, { path: 'tosks', loadChildren: () => import('./modules/tosks/tosks.module').then(m => m.TosksModule) }, { path: 'statistiques', loadChildren: () => import('./modules/statistiques/statistiques.module').then(m => m.StatistiquesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
