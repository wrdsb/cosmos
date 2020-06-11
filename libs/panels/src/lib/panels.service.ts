import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PanelsModule } from './panels.module';

@Injectable({
  providedIn: 'root'
})
export class PanelsService {
  private feedbackPanelEnabled = new BehaviorSubject<boolean>(false);
  readonly feedbackPanelEnabled$ = this.feedbackPanelEnabled.asObservable();

  private feedbackPanelVisible = new BehaviorSubject<boolean>(false);
  readonly feedbackPanelVisible$ = this.feedbackPanelVisible.asObservable();

  private helpPanelEnabled = new BehaviorSubject<boolean>(false);
  readonly helpPanelEnabled$ = this.helpPanelEnabled.asObservable();

  private helpPanelVisible = new BehaviorSubject<boolean>(false);
  readonly helpPanelVisible$ = this.helpPanelVisible.asObservable();

  private menuPanelEnabled = new BehaviorSubject<boolean>(false);
  readonly menuPanelEnabled$ = this.menuPanelEnabled.asObservable();

  private menuPanelVisible = new BehaviorSubject<boolean>(false);
  readonly menuPanelVisible$ = this.menuPanelVisible.asObservable();

  private notificationsPanelEnabled = new BehaviorSubject<boolean>(false);
  readonly notificationsPanelEnabled$ = this.notificationsPanelEnabled.asObservable();

  private notificationsPanelVisible = new BehaviorSubject<boolean>(false);
  readonly notificationsPanelVisible$ = this.notificationsPanelVisible.asObservable();

  private profilePanelEnabled = new BehaviorSubject<boolean>(false);
  readonly profilePanelEnabled$ = this.profilePanelEnabled.asObservable();

  private profilePanelVisible = new BehaviorSubject<boolean>(false);
  readonly profilePanelVisible$ = this.profilePanelVisible.asObservable();

  private settingsPanelEnabled = new BehaviorSubject<boolean>(false);
  readonly settingsPanelEnabled$ = this.settingsPanelEnabled.asObservable();

  private settingsPanelVisible = new BehaviorSubject<boolean>(false);
  readonly settingsPanelVisible$ = this.settingsPanelVisible.asObservable();

  constructor() { }

  enableFeedbackPanel(feedbackPanelEnabled: boolean): void {
    this.feedbackPanelEnabled.next(feedbackPanelEnabled);
    console.log(`feedbackPanelEnabled$ set to ${this.feedbackPanelEnabled.getValue()}`);
  }
  showFeedbackPanel(feedbackPanelVisible: boolean): void {
    this.feedbackPanelVisible.next(feedbackPanelVisible);
    console.log(`feedbackPanelVisible$ set to ${this.feedbackPanelVisible.getValue()}`);
  }

  enableHelpPanel(helpPanelEnabled: boolean): void {
    this.helpPanelEnabled.next(helpPanelEnabled);
    console.log(`helpPanelEnabled$ set to ${this.helpPanelEnabled.getValue()}`);
  }
  showHelpPanel(helpPanelVisible: boolean): void {
    this.helpPanelVisible.next(helpPanelVisible);
    console.log(`helpPanelVisible$ set to ${this.helpPanelVisible.getValue()}`);
  }

  enableMenuPanel(menuPanelEnabled: boolean): void {
    this.menuPanelEnabled.next(menuPanelEnabled);
    console.log(`menuPanelEnabled$ set to ${this.menuPanelEnabled.getValue()}`);
  }
  showMenuPanel(menuPanelVisible: boolean): void {
    this.menuPanelVisible.next(menuPanelVisible);
    console.log(`menuPanelVisible$ set to ${this.menuPanelVisible.getValue()}`);
  }

  enableNotificationsPanel(notificationsPanelEnabled: boolean): void {
    this.notificationsPanelEnabled.next(notificationsPanelEnabled);
    console.log(`notificationsPanelEnabled$ set to ${this.notificationsPanelEnabled.getValue()}`);
  }
  showNotificationsPanel(notificationsPanelVisible: boolean): void {
    this.notificationsPanelVisible.next(notificationsPanelVisible);
    console.log(`notificationsPanelVisible$ set to ${this.notificationsPanelVisible.getValue()}`);
  }

  enableProfilePanel(profilePanelEnabled: boolean): void {
    this.profilePanelEnabled.next(profilePanelEnabled);
    console.log(`profilePanelEnabled$ set to ${this.profilePanelEnabled.getValue()}`);
  }
  showProfilePanel(profilePanelVisible: boolean): void {
    this.profilePanelVisible.next(profilePanelVisible);
    console.log(`profilePanelVisible$ set to ${this.profilePanelVisible.getValue()}`);
  }

  enableSettingsPanel(settingsPanelEnabled: boolean): void {
    this.settingsPanelEnabled.next(settingsPanelEnabled);
    console.log(`settingsPanelEnabled$ set to ${this.settingsPanelEnabled.getValue()}`);
  }
  showSettingsPanel(settingsPanelVisible: boolean): void {
    this.settingsPanelVisible.next(settingsPanelVisible);
    console.log(`settingsPanelVisible$ set to ${this.settingsPanelVisible.getValue()}`);
  }
}
