import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Directive({
  selector: '[appAADSignin]'
})
export class AADSigninDirective {
  constructor(private afAuth: AngularFireAuth) {}

  @HostListener('click')
  onclick() {
    let provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      // Optional "tenant" parameter in case you are using an Azure AD tenant.
      // eg. '8eaef023-2b34-4da1-9baa-8bc8c9d6a490' or 'contoso.onmicrosoft.com'
      // or "common" for tenant-independent tokens.
      // The default value is "common".
      tenant: 'cd25c694-bfb8-48f4-9d0d-b9af282c4ab4'
    });

    this.afAuth.auth.signInWithRedirect(provider);
  }

}
