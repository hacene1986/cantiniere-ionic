import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-account-modifications",
  templateUrl: "./account-modifications.page.html",
  styleUrls: ["./account-modifications.page.scss"]
})
export class AccountModificationsPage implements OnInit {
  id: number;
  user: Object;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id) {
    this.userService.getUtilisateur(id).subscribe(res => {
      this.user = res;
    });
  }

  updateUser(form: NgForm) {
    this.userService
      .updateUtilisateur(this.id, form.form.value)
      .subscribe(user => {
        form.reset();
        window.location.reload();
      });
  }
}
