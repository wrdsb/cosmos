import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReleaseInfoComponent } from './release-info/release-info.component';
import { ReleasesHomeComponent } from './releases-home/releases-home.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ReleaseInfoComponent, ReleasesHomeComponent]
})
export class ReleasesModule {}
