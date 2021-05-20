import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleHomeComponent } from './people-home/people-home.component';
import { SchoolsHomeComponent } from './schools-home/schools-home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleHomeComponent, SchoolsHomeComponent],
})
export class ScreensSharedCodexModule {}
