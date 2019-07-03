import { AuthentificationService } from './../../services/authentification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motdepassoublie',
  templateUrl: './motdepassoublie.page.html',
  styleUrls: ['./motdepassoublie.page.scss'],
})
export class MotdepassoubliePage implements OnInit {

  lostPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthentificationService
  ) { }

  ngOnInit() {
  }

  initForm() {
    this.lostPasswordForm = this.formBuilder.group({
      emailLost: ['', Validators.required],
    });
  }

  validerPasswordOublie() {
    const formValue = this.lostPasswordForm.value;
    const emailLost: string = formValue.emailLost;
    // this.modalService.open(modalPassword, { centered: true, windowClass: 'modalPassword' });
    this.authService.forgotPassword(emailLost);
  }
}
