import { Component, OnInit } from "@angular/core";
import { UserService } from '../../../services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss']
})
export class UserAccountPage implements OnInit {

  public searchText: string;
  users: Array<User>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUtilisateur();
  }

    getAllUtilisateur() {
      this.userService.getAllUtilisateur().subscribe(
        response => {
          console.log(response);
          this.users = response;
          // console.log('list of users: ' + this.users);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
