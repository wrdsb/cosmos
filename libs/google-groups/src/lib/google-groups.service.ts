import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MessagesService } from '@cosmos/messages';
import { GoogleGroup } from "@cosmos/types";
import { GROUPS } from "@cosmos/mocks";

@Injectable({
  providedIn: 'root'
})
export class GoogleGroupsService {
  private groups: GoogleGroup[] = [];

  constructor(private messagesService: MessagesService) { }

  getGroups(): Observable<GoogleGroup[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messagesService.add('Google Groups Service: fetched Groups');
    return of(GROUPS);
  }
}
