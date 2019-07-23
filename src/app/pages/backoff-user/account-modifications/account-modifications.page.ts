import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-account-modifications",
  templateUrl: "./account-modifications.page.html",
  styleUrls: ["./account-modifications.page.scss"]
})
export class AccountModificationsPage implements OnInit {
  id: number;
  user: Object;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id) {
    // console.log(id)
    this.userService.getUtilisateur(id).subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }

  updateUser(form: NgForm) {
    console.log(form.form.value);
    this.userService
      .updateUtilisateur(this.id, form.form.value)
      .subscribe(user => {
        console.log("ok");
        form.reset();
      });
  }
}
