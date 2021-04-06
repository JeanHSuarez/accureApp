import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent} from './pages/users-list/users-list.component';
import { TimeLogsListComponent} from './pages/time-logs-list/time-logs-list.component';
import { OrganizationsListComponent} from './pages/organizations-list/organizations-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'users', component: UsersListComponent},
  { path: 'org', component: OrganizationsListComponent},
  { path: 'timelogs', component: TimeLogsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
