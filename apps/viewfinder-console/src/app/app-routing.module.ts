import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';

import { ProfilePanelComponent } from './profile-panel/profile-panel.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfilePanelComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
