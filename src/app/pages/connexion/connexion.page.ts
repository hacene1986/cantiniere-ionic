import { ToastController } from "@ionic/angular";
import { AuthentificationService } from "../../services/authentification.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";
import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { Validators, FormGroup, FormBuilder, NgForm } from "@angular/forms";
import jwt_decode from "jwt-decode";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.page.html",
  styleUrls: ["./connexion.page.scss"]
})
export class ConnexionPage implements OnInit {
  connectionUserData = {};
  connexionForm: FormGroup;
  userConnected: User;

  constructor(
    private router: Router,
    private authService: AuthentificationService,
    public formBuilder: FormBuilder,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.connexionForm = this.formBuilder.group({
      login: ["", Validators.required],
      pwd: ["", Validators.required]
    });
  }

  // Appel de la méthode de connexion
  connexion(form: NgForm) {
    this.authService
      .authentification(form.value.email, form.value.password)
      .subscribe(
        user => {
          this.userConnected = this.authService.getUserConnected();
          console.log("userConnected in Connexion :");
          console.log(this.userConnected);

          this.router.navigate(["/"]);
          this.toastSuccess();
          // window.location.reload();
        },
        err => {
          console.log("Erreur d'authentification: " + err);
          if (localStorage.getItem("token") == null) {
            this.toastError();
          }
        }
      );
  }

  async toastSuccess() {
    const toast = await this.toastController.create({
      message: "Bienvenu ! Vous êtes connecté.",
      position: "bottom",
      color: "success",
      duration: 3000,
      buttons: [
        {
          text: "OK",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    toast.present();
  }

  async toastError() {
    const toast = await this.toastController.create({
      message: "Probleme serveur",
      position: "bottom",
      color: "danger",
      duration: 10000,
      buttons: [
        {
          text: "OK",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    toast.present();
  }
}
