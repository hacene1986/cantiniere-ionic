import { ToastController } from '@ionic/angular';
import { AuthentificationService } from '../../services/authentification.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
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
  ) { }

  ngOnInit() {
    this.connexionForm = this.formBuilder.group({
      login: ['', Validators.required],
      pwd: ['', Validators.required],
    });
  }


  // Appel de la méthode de connexion
  connexion(form: NgForm) {

    this.authService.authentification(form.value.email, form.value.password)
      .subscribe(
        (user: User) => {
          console.log('user dans connexion:' + user.id);

          // Placement dans le localStorage
          localStorage.setItem('user', JSON.stringify(user));
          this.userConnected = user;
          window.location.reload();
          this.router.navigate(['/']);
        },
        err => {
          console.log('Erreur d\'authentification:' + err);
          if (localStorage.getItem('user') == null) {
            this.toastError();
          }
        }
      );
  }

  async toastSuccess() {
    const toast = await this.toastController.create({
      message: 'Bienvenu ! Vous allez être redirigé.',
      position: 'bottom',
      color: 'success',
      duration: 3000,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


  async toastError() {
    const toast = await this.toastController.create({
      message: 'Probleme serveur',
      position: 'bottom',
      color: 'danger',
      duration: 10000,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
