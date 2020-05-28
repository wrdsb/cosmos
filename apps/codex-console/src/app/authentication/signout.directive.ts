import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Directive({
  selector: '[appSignout]'
})
export class SignoutDirective {
  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    this.afAuth.auth.signOut();
  }
}
