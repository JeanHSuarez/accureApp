import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { UsersListComponent} from '../users-list/users-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'users', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
