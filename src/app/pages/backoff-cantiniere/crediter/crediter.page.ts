import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-crediter",
  templateUrl: "./crediter.page.html",
  styleUrls: ["./crediter.page.scss"]
})
export class CrediterPage implements OnInit {
  id: string;
  user: User;
  amount: number;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.userDetail(this.id);
  }

  userDetail(id) {
    this.userService.getUtilisateur(id).subscribe(res => {
      this.user = res;
    });
  }

  crediter(form: NgForm) {
    (this.amount = form.value.amount), console.log(this.amount);

    this.userService
      .crediterUtilisateur(this.id, this.amount)
      .subscribe(wallet => {
        console.log("ok");
        form.reset();
        window.location.reload();
      });
  }
}
