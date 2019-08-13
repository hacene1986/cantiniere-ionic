import { Component, OnInit } from "@angular/core";
import jwt_decod from "jwt-decode";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.page.html",
  styleUrls: ["./my-account.page.scss"]
})
export class MyAccountPage implements OnInit {
  id: string;
  user: Object;
  constructor() {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let tok = localStorage.getItem("token");
    let decod = jwt_decod(tok);
    this.user = decod.user;
  }
}
