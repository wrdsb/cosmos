import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChassisService {
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

  private slideinLeftEnabled = new BehaviorSubject<boolean>(true);
  readonly slideinLeftEnabled$ = this.slideinLeftEnabled.asObservable();

  private slideinLeftVisible = new BehaviorSubject<boolean>(false);
  readonly slideinLeftVisible$ = this.slideinLeftVisible.asObservable();

  private slideinLeftContent = new BehaviorSubject<string>('');
  readonly slideinLeftContent$ = this.slideinLeftContent.asObservable();

  private slideinRightEnabled = new BehaviorSubject<boolean>(true);
  readonly slideinRightEnabled$ = this.slideinRightEnabled.asObservable();

  private slideinRightVisible = new BehaviorSubject<boolean>(false);
  readonly slideinRightVisible$ = this.slideinRightVisible.asObservable();

  private slideinRightContent = new BehaviorSubject<string>('');
  readonly slideinRightContent$ = this.slideinRightContent.asObservable();

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

  enableSlideinLeft(slideinLeftEnabled: boolean): void {
    this.slideinLeftEnabled.next(slideinLeftEnabled);
    console.log(`slideinLeftEnabled$ set to ${this.slideinLeftEnabled.getValue()}`);
  }
  showSlideinLeft(slideinLeftVisible: boolean): void {
    this.slideinLeftVisible.next(slideinLeftVisible);
    console.log(`slideinLeftVisible$ set to ${this.slideinLeftVisible.getValue()}`);
  }

  enableSlideinRight(slideinRightEnabled: boolean): void {
    this.slideinRightEnabled.next(slideinRightEnabled);
    console.log(`slideinRightEnabled$ set to ${this.slideinRightEnabled.getValue()}`);
  }
  showSlideinRight(slideinRightVisible: boolean): void {
    this.slideinRightVisible.next(slideinRightVisible);
    console.log(`slideinRightVisible$ set to ${this.slideinRightVisible.getValue()}`);
  }
}
