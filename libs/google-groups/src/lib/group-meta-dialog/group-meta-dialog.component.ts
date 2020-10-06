import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from "rxjs";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GoogleGroup } from "@cosmos/types";
import { GoogleGroupsService } from '../google-groups.service';

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
    this.selectedGroup$ = this.groupsService.selectedGroup$;
  }
}
