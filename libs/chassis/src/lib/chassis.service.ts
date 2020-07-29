import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Menu } from "@cosmos/types";
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class ChassisService {
  private sidebarOuterLeft: MatSidenav;
  private sidebarOuterRight: MatSidenav;

  private headerEnabled = new BehaviorSubject<boolean>(true);
  readonly headerEnabled$ = this.headerEnabled.asObservable();

  private headerVisible = new BehaviorSubject<boolean>(false);
  readonly headerVisible$ = this.headerVisible.asObservable();

  private headerContent = new BehaviorSubject<Menu>({links: []});
  readonly headerContent$ = this.headerContent.asObservable();

  private footerEnabled = new BehaviorSubject<boolean>(true);
  readonly footerEnabled$ = this.footerEnabled.asObservable();

  private footerVisible = new BehaviorSubject<boolean>(false);
  readonly footerVisible$ = this.footerVisible.asObservable();

  private footerContent = new BehaviorSubject<Menu>({links: []});
  readonly footerContent$ = this.footerContent.asObservable();

  private sidebarOuterLeftEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarOuterLeftEnabled$ = this.sidebarOuterLeftEnabled.asObservable();

  private sidebarOuterLeftVisible = new BehaviorSubject<boolean>(false);
  readonly sidebarOuterLeftVisible$ = this.sidebarOuterLeftVisible.asObservable();

  private sidebarOuterLeftContent = new BehaviorSubject<string>('');
  readonly sidebarOuterLeftContent$ = this.sidebarOuterLeftContent.asObservable();

  private sidebarOuterRightEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarOuterRightEnabled$ = this.sidebarOuterRightEnabled.asObservable();

  private sidebarOuterRightVisible = new BehaviorSubject<boolean>(false);
  readonly sidebarOuterRightVisible$ = this.sidebarOuterRightVisible.asObservable();

  private sidebarOuterRightContent = new BehaviorSubject<string>('');
  readonly sidebarOuterRightContent$ = this.sidebarOuterRightContent.asObservable();

  private sidebarInnerLeftEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarInnerLeftEnabled$ = this.sidebarInnerLeftEnabled.asObservable();

  private sidebarInnerLeftVisible = new BehaviorSubject<boolean>(false);
  readonly sidebarInnerLeftVisible$ = this.sidebarInnerLeftVisible.asObservable();

  private sidebarInnerLeftContent = new BehaviorSubject<string>('');
  readonly sidebarInnerLeftContent$ = this.sidebarInnerLeftContent.asObservable();

  private sidebarInnerRightEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarInnerRightEnabled$ = this.sidebarInnerRightEnabled.asObservable();

  private sidebarInnerRightVisible = new BehaviorSubject<boolean>(false);
  readonly sidebarInnerRightVisible$ = this.sidebarInnerRightVisible.asObservable();

  private sidebarInnerRightContent = new BehaviorSubject<string>('');
  readonly sidebarInnerRightContent$ = this.sidebarInnerRightContent.asObservable();

  constructor() { }

  getSidebarOuterLeft(): MatSidenav {
		return this.sidebarOuterLeft;
  }
  setSidebarOuterLeft(sidenav: MatSidenav) {
		this.sidebarOuterLeft = sidenav;
  }
  openSidebarOuterLeft() {
    return this.sidebarOuterLeft.open();
  }
  closeSidebarOuterLeft() {
    return this.sidebarOuterLeft.close();
  }
  toggleSidebarOuterLeft(): void {
    console.log('toggleSidebarOuterLeft');
    this.sidebarOuterLeft.toggle();
  }

  getSidebarOuterRight(): MatSidenav {
		return this.sidebarOuterRight;
  }
  setSidebarOuterRight(sidenav: MatSidenav) {
		this.sidebarOuterRight = sidenav;
  }
  openSidebarOuterRight() {
    return this.sidebarOuterRight.open();
  }
  closeSidebarOuterRight() {
    return this.sidebarOuterRight.close();
  }
  toggleSidebarOuterRight(): void {
    console.log(`${this.sidebarOuterRight.opened}`);
    console.log('toggleSidebarOuterRight');
    this.sidebarOuterRight.toggle();
    console.log(`${this.sidebarOuterRight.opened}`);
  }

  enableHeader(headerEnabled: boolean): void {
    this.headerEnabled.next(headerEnabled);
    console.log(`headerEnabled$ set to ${this.headerEnabled.getValue()}`);
  }
  showHeader(headerVisible: boolean): void {
    this.headerVisible.next(headerVisible);
    console.log(`headerVisible$ set to ${this.headerVisible.getValue()}`);
  }
  setHeaderContent(headerContent: Menu): void {
    this.headerContent.next(headerContent);
    console.log(`headerContent$ set to ${this.headerContent.getValue()}`)
  }

  enableFooter(footerEnabled: boolean): void {
    this.footerEnabled.next(footerEnabled);
    console.log(`footerEnabled$ set to ${this.footerEnabled.getValue()}`);
  }
  showFooter(footerVisible: boolean): void {
    this.footerVisible.next(footerVisible);
    console.log(`footerVisible$ set to ${this.footerVisible.getValue()}`);
  }
  setFooterContent(footerContent: Menu): void {
    this.footerContent.next(footerContent);
    console.log(`footerContent$ set to ${this.footerContent.getValue()}`)
  }

  enableSidebarLeft(sidebarOuterLeftEnabled: boolean): void {
    this.sidebarOuterLeftEnabled.next(sidebarOuterLeftEnabled);
    console.log(`sidebarOuterLeftEnabled$ set to ${this.sidebarOuterLeftEnabled.getValue()}`);
  }
  showSidebarLeft(sidebarOuterLeftVisible: boolean): void {
    this.sidebarOuterLeftVisible.next(sidebarOuterLeftVisible);
    console.log(`sidebarOuterLeftVisible$ set to ${this.sidebarOuterLeftVisible.getValue()}`);
  }
  setsidebarOuterLeftContent(sidebarOuterLeftContent: string): void {
    this.sidebarOuterLeftContent.next(sidebarOuterLeftContent);
    console.log(`sidebarOuterLeftContent$ set to ${this.sidebarOuterLeftContent.getValue()}`)
  }

  enableSidebarRight(sidebarOuterRightEnabled: boolean): void {
    this.sidebarOuterRightEnabled.next(sidebarOuterRightEnabled);
    console.log(`sidebarOuterRightEnabled$ set to ${this.sidebarOuterRightEnabled.getValue()}`);
  }
  showSidebarRight(sidebarOuterRightVisible: boolean): void {
    this.sidebarOuterRightVisible.next(sidebarOuterRightVisible);
    console.log(`sidebarOuterRightVisible$ set to ${this.sidebarOuterRightVisible.getValue()}`);
  }
  setsidebarOuterRightContent(sidebarOuterRightContent: string): void {
    this.sidebarOuterRightContent.next(sidebarOuterRightContent);
    console.log(`sidebarOuterRightContent$ set to ${this.sidebarOuterRightContent.getValue()}`)
  }

  enableSlideinLeft(sidebarInnerLeftEnabled: boolean): void {
    this.sidebarInnerLeftEnabled.next(sidebarInnerLeftEnabled);
    console.log(`sidebarInnerLeftEnabled$ set to ${this.sidebarInnerLeftEnabled.getValue()}`);
  }
  showSlideinLeft(sidebarInnerLeftVisible: boolean): void {
    this.sidebarInnerLeftVisible.next(sidebarInnerLeftVisible);
    console.log(`sidebarInnerLeftVisible$ set to ${this.sidebarInnerLeftVisible.getValue()}`);
  }
  setsidebarInnerLeftContent(sidebarInnerLeftContent: string): void {
    this.sidebarInnerLeftContent.next(sidebarInnerLeftContent);
    console.log(`sidebarInnerLeftContent$ set to ${this.sidebarInnerLeftContent.getValue()}`)
  }

  enableSlideinRight(sidebarInnerRightEnabled: boolean): void {
    this.sidebarInnerRightEnabled.next(sidebarInnerRightEnabled);
    console.log(`sidebarInnerRightEnabled$ set to ${this.sidebarInnerRightEnabled.getValue()}`);
  }
  showSlideinRight(sidebarInnerRightVisible: boolean): void {
    this.sidebarInnerRightVisible.next(sidebarInnerRightVisible);
    console.log(`sidebarInnerRightVisible$ set to ${this.sidebarInnerRightVisible.getValue()}`);
  }
  setsidebarInnerRightContent(sidebarInnerRightContent: string): void {
    this.sidebarInnerRightContent.next(sidebarInnerRightContent);
    console.log(`sidebarInnerRightContent$ set to ${this.sidebarInnerRightContent.getValue()}`)
  }
}
