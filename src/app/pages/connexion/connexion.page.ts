import { AuthentificationService } from '../../services/authentification.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  connectionUserData = {};
  connexionForm: FormGroup;
  userConnected: User;

  // @ViewChild('snackBarTemplate')
  // snackBarTemplate: TemplateRef<any>;

  // @ViewChild('snackBarTemplateError')
  // snackBarTemplateError: TemplateRef<any>;

  constructor(
    // private modalService: NgbModal,
    // private snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthentificationService,
    public formBuilder: FormBuilder) {

    this.connexionForm = this.formBuilder.group({
      login: ['', Validators.required],
      pwd: ['', Validators.required],
    });
  }

  ngOnInit() {
  }


  // Appel de la méthode de connexion
  connexion() {
    const formValue = this.connexionForm.value;
    const login: string = formValue.login;
    const pwd: string = formValue.pwd;

    this.authService.authentification(login, pwd)
      .subscribe(
        (user: User) => {
          console.log('user dans connexion:' + user.id);

          // Placement dans le localStorage
          localStorage.setItem('user', JSON.stringify(user));
          this.userConnected = user;
          window.location.reload();
          this.router.navigate(['/']);
          this.openSnackBar();
        },
        err => {
          console.log('Erreur d\'authentification:' + err);
          if (localStorage.getItem('user') == null) {
            this.openSnackBarError();
          }
        }
      );
  }

  openSnackBar() {
    // this.snackBar.openFromTemplate(this.snackBarTemplate, {
    //   duration: 7000,
    //   verticalPosition: 'bottom',
    //   horizontalPosition: 'right',
    // });
  }

  openSnackBarError() {
    // this.snackBar.openFromTemplate(this.snackBarTemplateError, {
    //   duration: 10000,
    //   verticalPosition: 'bottom',
    //   horizontalPosition: 'center',
    // });
  }

}
