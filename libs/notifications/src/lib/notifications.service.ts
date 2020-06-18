import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  notifications: string[] = [];

  add(message: string) {
    this.notifications.push(message);
  }

  clear() {
    this.notifications = [];
  }
}