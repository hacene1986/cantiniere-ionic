import { AuthentificationService } from "src/app/services/authentification.service";
import { Component, OnInit } from "@angular/core";

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
    } else {
      this.userConnected = "";
      this.isAuth = false;
    }
  }
}
