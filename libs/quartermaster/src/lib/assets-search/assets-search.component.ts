import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

import { faWindowClose as CloseIcon } from "@fortawesome/free-solid-svg-icons";
import { faCircle as FalseIcon } from "@fortawesome/free-regular-svg-icons";
import { faAdjust as MaybeIcon } from "@fortawesome/free-solid-svg-icons";
import { faCircle as TrueIcon } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faFastBackward, faBackward, faForward, faFastForward } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'cosmos-ats-assets-search',
  templateUrl: './assets-search.component.html',
  styleUrls: ['./assets-search.component.scss']
})
export class AssetsSearchComponent implements OnInit {
  CloseIcon = CloseIcon;

  FalseIcon = FalseIcon;
  MaybeIcon = MaybeIcon;
  TrueIcon = TrueIcon;

  angleUpIcon = faAngleUp;
  angleDownIcon = faAngleDown;

  beginningIcon = faFastBackward;
  backwardIcon = faBackward;
  forwardIcon = faForward;
  endIcon = faFastForward;
  
  displayedColumns$ = new BehaviorSubject<string[]>([
    'assetID',
    'status',
    'manufacturer',
    'modelName',
    'modelID',
    'location',
    'program',
    'project',
    'poDate',
    'serial',
    'assignedTo',
    'note',
    'position',
    'employee'
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
