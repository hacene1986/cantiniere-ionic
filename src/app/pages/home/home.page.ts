import { AuthentificationService } from "src/app/services/authentification.service";
import { Component, OnInit } from "@angular/core";
// import { jwt_decode } from 'jwt-decode';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  constructor(private auth: AuthentificationService) {}

  isAuth: boolean;
  userConnected: any;

  ngOnInit() {
    if (this.auth.isLogged()) {
      this.isAuth = true;
      this.userConnected = this.auth.getUserConnected();
      console.log("userConnected in Home : ");
      console.log(this.userConnected);
    } else {
      this.userConnected = "";
      this.isAuth = false;
    }
    console.log("user connecté (isAuth) : " + this.isAuth);
  }
}
