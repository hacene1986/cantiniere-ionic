import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Menu',
      url: '/menu',
      icon: 'pizza'
    },
    {
      title: 'Plats',
      url: '/plat',
      icon: 'plat'
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
      this.isAuth = true;
      this.userConnected = JSON.parse(localStorage.getItem('user'));
      console.log('userConnected : ' + JSON.stringify(this.userConnected));
    } else {
      this.isAuth = false;
    }
    console.log('user connecté (isAuth) : ' + this.isAuth);
  }
}
