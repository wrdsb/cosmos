import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoopComponent } from './user-loop/user-loop.component';

const routes: Routes = [
  { path: 'user', component: UserLoopComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoopsRoutingModule { }
