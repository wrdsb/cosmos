import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { GoogleGroup } from "@cosmos/types";
import { GoogleGroupsService } from '../google-groups.service';

@Component({
  selector: 'cosmos-google-group-meta-dialog',
  templateUrl: './group-meta-dialog.component.html',
  styleUrls: ['./group-meta-dialog.component.scss']
})
export class GroupMetaDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public group: GoogleGroup) {}
}
