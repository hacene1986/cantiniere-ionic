import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.page.html",
  styleUrls: ["./user-details.page.scss"]
})
export class UserDetailsPage implements OnInit {
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
}
