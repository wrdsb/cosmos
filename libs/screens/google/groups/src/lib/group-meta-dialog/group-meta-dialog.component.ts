import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs";

import { ScreensGoogleGoogleGroup } from "@cosmos/types";
import { ScreensGoogleGoogleGroupsService } from '@cosmos/search-services';

@Component({
  selector: 'cosmos-google-group-meta-dialog',
  templateUrl: './group-meta-dialog.component.html',
  styleUrls: ['./group-meta-dialog.component.scss']
})
export class GroupMetaDialogComponent {
  public selectedGroup$: Observable<ScreensGoogleGoogleGroup>;

  constructor(
    private groupsService: ScreensGoogleGoogleGroupsService
  ) {
    this.selectedGroup$ = this.groupsService.selectedItem$;
  }
}
