import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MessageService } from '../shared/services/message.service';
import { GoogleGroup } from "@cosmos/types";
import { GROUPS } from "@cosmos/mocks";

@Injectable({
  providedIn: 'root'
})
export class GoogleGroupsService {
  private groups: GoogleGroup[] = [];

  constructor(private messageService: MessageService) { }

  getGroups(): Observable<GoogleGroup[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('Google Groups Service: fetched Groups');
    return of(GROUPS);
  }
}
