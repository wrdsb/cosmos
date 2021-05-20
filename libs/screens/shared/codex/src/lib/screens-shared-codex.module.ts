import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { SchoolsComponent } from './schools/schools.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleComponent, SchoolsComponent],
})
export class ScreensSharedCodexModule {}
