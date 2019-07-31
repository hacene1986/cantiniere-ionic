import { AuthentificationService } from "./../../services/authentification.service";
import { ToastController } from "@ionic/angular";
import { User } from "./../../models/user";
import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-inscription",
  templateUrl: "./inscription.page.html",
  styleUrls: ["./inscription.page.scss"]
})
export class InscriptionPage implements OnInit {
  registerForm: FormGroup;
  userConnected: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private auth: AuthentificationService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        firstname: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required]
      },
      {}
    );
  }

  creerUtilisateur(form: NgForm) {
    const user: User = {
      name: form.value.nom,
      firstname: form.value.prenom,
      sex: null,
      email: form.value.mail,
      phone: form.value.tel,
      password: form.value.password,
      address: form.value.rue,
      postalCode: form.value.cp,
      town: form.value.ville,
      isLunchLady: 0,
      wallet: 0,
      image64: ""
    };

    this.userService.creerUtilisateur(user).subscribe(
      data => {
        // this.auth
        //   .authentification(user.email, user.password)
        //   .subscribe(
        //     data2 => {
        //       console.log(data2);
        //     },
        //     err => {
        //       console.log(err);
        //     }
        //   );
        form.reset();
        this.userConnected = user;
        window.location.reload();
        this.router.navigate(["/"]);
        this.toastSuccess();
      },
      err => {
        console.log(user);
        console.log(err);
        this.router.navigate(["/"]);
        this.toastError();
      }
    );
  }

  get name() {
    return this.registerForm.get("name");
  }
  get firstname() {
    return this.registerForm.get("firstname");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }

  async toastSuccess() {
    const toast = await this.toastController.create({
      message: "Vous êtes inscrit.",
      position: "bottom",
      color: "success",
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
