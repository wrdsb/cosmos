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

  private sidebarInnerLeft: MatSidenav;
  private sidebarInnerRight: MatSidenav;

  private headerEnabled = new BehaviorSubject<boolean>(true);
  readonly headerEnabled$ = this.headerEnabled.asObservable();

  private headerVisible = new BehaviorSubject<boolean>(false);
  readonly headerVisible$ = this.headerVisible.asObservable();

  private headerContent = new BehaviorSubject<Menu>({items:[]});
  readonly headerContent$ = this.headerContent.asObservable();

  private footerEnabled = new BehaviorSubject<boolean>(true);
  readonly footerEnabled$ = this.footerEnabled.asObservable();

  private footerVisible = new BehaviorSubject<boolean>(false);
  readonly footerVisible$ = this.footerVisible.asObservable();

  private footerContent = new BehaviorSubject<Menu>({items:[]});
  readonly footerContent$ = this.footerContent.asObservable();

  private sidebarOuterLeftEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarOuterLeftEnabled$ = this.sidebarOuterLeftEnabled.asObservable();

  private sidebarOuterLeftContent = new BehaviorSubject<string>('');
  readonly sidebarOuterLeftContent$ = this.sidebarOuterLeftContent.asObservable();

  private sidebarOuterRightEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarOuterRightEnabled$ = this.sidebarOuterRightEnabled.asObservable();

  private sidebarOuterRightContent = new BehaviorSubject<string>('');
  readonly sidebarOuterRightContent$ = this.sidebarOuterRightContent.asObservable();

  private sidebarInnerLeftEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarInnerLeftEnabled$ = this.sidebarInnerLeftEnabled.asObservable();

  private sidebarInnerLeftContent = new BehaviorSubject<string>('');
  readonly sidebarInnerLeftContent$ = this.sidebarInnerLeftContent.asObservable();

  private sidebarInnerRightEnabled = new BehaviorSubject<boolean>(true);
  readonly sidebarInnerRightEnabled$ = this.sidebarInnerRightEnabled.asObservable();

  private sidebarInnerRightContent = new BehaviorSubject<string>('');
  readonly sidebarInnerRightContent$ = this.sidebarInnerRightContent.asObservable();

  constructor() { }

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
    console.log(`headerContent$ set to ${JSON.stringify(this.headerContent.getValue())}`)
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

  enableSidebarOuterLeft(sidebarOuterLeftEnabled: boolean): void {
    this.sidebarOuterLeftEnabled.next(sidebarOuterLeftEnabled);
    console.log(`sidebarOuterLeftEnabled$ set to ${this.sidebarOuterLeftEnabled.getValue()}`);
  }
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
  setsidebarOuterLeftContent(sidebarOuterLeftContent: string): void {
    this.sidebarOuterLeftContent.next(sidebarOuterLeftContent);
    console.log(`sidebarOuterLeftContent$ set to ${this.sidebarOuterLeftContent.getValue()}`)
  }

  enableSidebarOuterRight(sidebarOuterRightEnabled: boolean): void {
    this.sidebarOuterRightEnabled.next(sidebarOuterRightEnabled);
    console.log(`sidebarOuterRightEnabled$ set to ${this.sidebarOuterRightEnabled.getValue()}`);
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
    console.log('toggleSidebarOuterRight');
    this.sidebarOuterRight.toggle();
  }
  setsidebarOuterRightContent(sidebarOuterRightContent: string): void {
    this.sidebarOuterRightContent.next(sidebarOuterRightContent);
    console.log(`sidebarOuterRightContent$ set to ${this.sidebarOuterRightContent.getValue()}`)
  }

  enableSidebarInnerLeft(sidebarInnerLeftEnabled: boolean): void {
    this.sidebarInnerLeftEnabled.next(sidebarInnerLeftEnabled);
    console.log(`sidebarInnerLeftEnabled$ set to ${this.sidebarInnerLeftEnabled.getValue()}`);
  }
  getSidebarInnerLeft(): MatSidenav {
		return this.sidebarInnerLeft;
  }
  setSidebarInnerLeft(sidenav: MatSidenav) {
		this.sidebarInnerLeft = sidenav;
  }
  openSidebarInnerLeft() {
    return this.sidebarInnerLeft.open();
  }
  closeSidebarInnerLeft() {
    return this.sidebarInnerLeft.close();
  }
  toggleSidebarInnerLeft(): void {
    console.log('toggleSidebarInnerLeft');
    this.sidebarInnerLeft.toggle();
  }
  setsidebarInnerLeftContent(sidebarInnerLeftContent: string): void {
    this.sidebarInnerLeftContent.next(sidebarInnerLeftContent);
    console.log(`sidebarInnerLeftContent$ set to ${this.sidebarInnerLeftContent.getValue()}`)
  }

  enableSidebarInnerRight(sidebarInnerRightEnabled: boolean): void {
    this.sidebarInnerRightEnabled.next(sidebarInnerRightEnabled);
    console.log(`sidebarInnerRightEnabled$ set to ${this.sidebarInnerRightEnabled.getValue()}`);
  }
  getSidebarInnerRight(): MatSidenav {
		return this.sidebarInnerRight;
  }
  setSidebarInnerRight(sidenav: MatSidenav) {
		this.sidebarInnerRight = sidenav;
  }
  openSidebarInnerRight() {
    return this.sidebarInnerRight.open();
  }
  closeSidebarInnerRight() {
    return this.sidebarInnerRight.close();
  }
  toggleSidebarInnerRight(): void {
    console.log('toggleSidebarInnerRight');
    this.sidebarInnerRight.toggle();
  }
  setsidebarInnerRightContent(sidebarInnerRightContent: string): void {
    this.sidebarInnerRightContent.next(sidebarInnerRightContent);
    console.log(`sidebarInnerRightContent$ set to ${this.sidebarInnerRightContent.getValue()}`)
  }
}
