import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-debiter",
  templateUrl: "./debiter.page.html",
  styleUrls: ["./debiter.page.scss"]
})
export class DebiterPage implements OnInit {
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
      // console.log(res)
      this.user = res;
    });
  }

  debiter(form: NgForm) {
    // let formulaire =
    // console.log(formulaire)
    (this.amount = form.value.amount),
      // location.search = "?amount="+this.amount
      console.log(this.amount);

    this.userService
      .debiterUtilisateur(this.id, this.amount)
      .subscribe(walet => {
        console.log("ok");
        form.reset();
        window.location.reload();
      });
  }
}
