import { Router } from "@angular/router";
import { Component } from "@angular/core";
// import { jwt_decode } from 'jwt-decode';

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthentificationService } from "src/app/services/authentification.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public appPages = [
    {
      title: "Menus",
      url: "/menu",
      icon: "pizza",
      color: "danger"
    },
    {
      title: "Plats",
      url: "/plats",
      icon: "beer"
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "cart"
    },
    {
      title: "Panier",
      url: "/panier",
      icon: "cart"
    }
  ];

  // Attribut connécté au service
  isAuth: boolean;
  userConnected: any;

  constructor(
    private auth: AuthentificationService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.checkConnexion();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkConnexion() {
    if (this.auth.isLogged()) {
      // const token = localStorage.getItem('token');
      // // const decoded = jwt_decode(token);
      // console.log(token);
      // // console.log(decoded);

      this.isAuth = true;
      this.userConnected = this.auth.getUserConnected();
      console.log("userConnected in AppComponent : ");
      console.log(this.userConnected);
      // console.log('userConnected : ' + JSON.stringify(this.userConnected));
    } else {
      this.isAuth = false;
    }
    console.log("user connecté (isAuth) : " + this.isAuth);
  }

  deconnexion() {
    this.auth.logout();
    this.initializeApp();
    window.location.reload();
  }
}
