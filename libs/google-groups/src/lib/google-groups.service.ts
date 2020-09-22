import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MessagesService } from '@cosmos/messages';
import { CodexService } from "@cosmos/codex-service";
import { IGORService } from "@cosmos/igor-service";

import { GoogleGroup } from "@cosmos/types";

@Injectable({
  providedIn: 'root'
})
export class GoogleGroupsService {
  private groups: GoogleGroup[] = [];

  private groupSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private selectedGroup: BehaviorSubject<GoogleGroup> = new BehaviorSubject<GoogleGroup>(null);
  
  public readonly groupSelected$: Observable<boolean> = this.groupSelected.asObservable();
  public readonly selectedGroup$: Observable<GoogleGroup> = this.selectedGroup.asObservable();

  constructor(
    private messagesService: MessagesService,
    private codexService: CodexService,
    private igorService: IGORService
  ) { }

  selectGroup(group: GoogleGroup) {
    group.owners = (group.owners) ? group.owners : []
    group.managers = (group.managers) ? group.managers : []

    this.groupSelected.next(true);
    this.selectedGroup.next(group);
    console.log(`${this.selectedGroup.value.email} selected`);
  }

  deselectGroup() {
    this.groupSelected.next(false);
    this.selectedGroup.next(null);
  }
}
