import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private appName: string;

  constructor() { }

  setAppName(name: string): void {
    this.appName = name;
  }

  getAppName(): string {
    return this.appName;
  }

}
