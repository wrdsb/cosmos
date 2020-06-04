import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UILayoutService {
  private headerEnabled = new BehaviorSubject<boolean>(true);
  readonly headerEnabled$ = this.headerEnabled.asObservable();

  private headerVisible = new BehaviorSubject<boolean>(false);
  readonly headerVisible$ = this.headerVisible.asObservable();

  private headerContent = new BehaviorSubject<string>('');
  readonly headerContent$ = this.headerContent.asObservable();

  private footerEnabled = new BehaviorSubject<boolean>(true);
  readonly footerEnabled$ = this.footerEnabled.asObservable();

  private footerVisible = new BehaviorSubject<boolean>(false);
  readonly footerVisible$ = this.footerVisible.asObservable();

  private footerContent = new BehaviorSubject<string>('');
  readonly footerContent$ = this.footerContent.asObservable();

  private sidebarLeftEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarLeftEnabled$ = this.sidebarLeftEnabled.asObservable();

  private sidebarLeftVisible = new BehaviorSubject<boolean>(false);
  readonly sidebarLeftVisible$ = this.sidebarLeftVisible.asObservable();

  private sidebarLeftContent = new BehaviorSubject<string>('');
  readonly sidebarLeftContent$ = this.sidebarLeftContent.asObservable();

  private sidebarRightEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarRightEnabled$ = this.sidebarRightEnabled.asObservable();

  private sidebarRightVisible = new BehaviorSubject<boolean>(false);
  readonly sidebarRightVisible$ = this.sidebarRightVisible.asObservable();

  private sidebarRightContent = new BehaviorSubject<string>('');
  readonly sidebarRightContent$ = this.sidebarRightContent.asObservable();

  private panelLeftEnabled = new BehaviorSubject<boolean>(true);
  readonly panelLeftEnabled$ = this.panelLeftEnabled.asObservable();

  private panelLeftVisible = new BehaviorSubject<boolean>(false);
  readonly panelLeftVisible$ = this.panelLeftVisible.asObservable();

  private panelLeftContent = new BehaviorSubject<string>('');
  readonly panelLeftContent$ = this.panelLeftContent.asObservable();

  private panelRightEnabled = new BehaviorSubject<boolean>(true);
  readonly panelRightEnabled$ = this.panelRightEnabled.asObservable();

  private panelRightVisible = new BehaviorSubject<boolean>(false);
  readonly panelRightVisible$ = this.panelRightVisible.asObservable();

  private panelRightContent = new BehaviorSubject<string>('');
  readonly panelRightContent$ = this.panelRightContent.asObservable();

  constructor() { }

  enableHeader(headerEnabled: boolean): void {
    this.headerEnabled.next(headerEnabled);
    console.log(`headerEnabled$ set to ${this.headerEnabled.getValue()}`);
  }
  showHeader(headerVisible: boolean): void {
    this.headerVisible.next(headerVisible);
    console.log(`headerVisible$ set to ${this.headerVisible.getValue()}`);
  }

  enableFooter(footerEnabled: boolean): void {
    this.footerEnabled.next(footerEnabled);
    console.log(`footerEnabled$ set to ${this.footerEnabled.getValue()}`);
  }
  showFooter(footerVisible: boolean): void {
    this.footerVisible.next(footerVisible);
    console.log(`footerVisible$ set to ${this.footerVisible.getValue()}`);
  }

  enableSidebarLeft(sidebarLeftEnabled: boolean): void {
    this.sidebarLeftEnabled.next(sidebarLeftEnabled);
    console.log(`sidebarLeftEnabled$ set to ${this.sidebarLeftEnabled.getValue()}`);
  }
  showSidebarLeft(sidebarLeftVisible: boolean): void {
    this.sidebarLeftVisible.next(sidebarLeftVisible);
    console.log(`sidebarLeftVisible$ set to ${this.sidebarLeftVisible.getValue()}`);
  }

  enableSidebarRight(sidebarRightEnabled: boolean): void {
    this.sidebarRightEnabled.next(sidebarRightEnabled);
    console.log(`sidebarRightEnabled$ set to ${this.sidebarRightEnabled.getValue()}`);
  }
  showSidebarRight(sidebarRightVisible: boolean): void {
    this.sidebarRightVisible.next(sidebarRightVisible);
    console.log(`sidebarRightVisible$ set to ${this.sidebarRightVisible.getValue()}`);
  }

  enablePanelLeft(panelLeftEnabled: boolean): void {
    this.panelLeftEnabled.next(panelLeftEnabled);
    console.log(`panelLeftEnabled$ set to ${this.panelLeftEnabled.getValue()}`);
  }
  showPanelLeft(panelLeftVisible: boolean): void {
    this.panelLeftVisible.next(panelLeftVisible);
    console.log(`panelLeftVisible$ set to ${this.panelLeftVisible.getValue()}`);
  }

  enablePanelRight(panelRightEnabled: boolean): void {
    this.panelRightEnabled.next(panelRightEnabled);
    console.log(`panelRightEnabled$ set to ${this.panelRightEnabled.getValue()}`);
  }
  showPanelRight(panelRightVisible: boolean): void {
    this.panelRightVisible.next(panelRightVisible);
    console.log(`panelRightVisible$ set to ${this.panelRightVisible.getValue()}`);
  }
}
