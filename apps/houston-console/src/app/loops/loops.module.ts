import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoopsRoutingModule } from './loops-routing.module';
import { UserLoopComponent } from './user-loop/user-loop.component';


@NgModule({
  declarations: [
    UserLoopComponent
  ],
  imports: [
    CommonModule,
    LoopsRoutingModule
  ]
})
export class LoopsModule { }
