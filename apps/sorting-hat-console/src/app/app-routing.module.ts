import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { 
    path: 'people-set-definitions',
    loadChildren: () => import('./people-set-definitions/people-set-definitions.module').then(m => m.PeopleSetDefinitionsModule)
  },
  { 
    path: 'people-set-memberships',
    loadChildren: () => import('./people-set-memberships/people-set-memberships.module').then(m => m.PeopleSetMembershipsModule)
  },
  { path: 'login',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
