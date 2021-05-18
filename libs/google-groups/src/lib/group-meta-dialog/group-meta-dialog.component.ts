import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs";

import { GoogleGroup } from "@cosmos/types";
import { GoogleGroupsService } from '@cosmos/search-services';

@Component({
  selector: 'cosmos-google-group-meta-dialog',
  templateUrl: './group-meta-dialog.component.html',
  styleUrls: ['./group-meta-dialog.component.scss']
})
export class GroupMetaDialogComponent {
  public selectedGroup$: Observable<GoogleGroup>;

  constructor(
    private groupsService: GoogleGroupsService
  ) {
    this.selectedGroup$ = this.groupsService.selectedItem$;
  }
}
