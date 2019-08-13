import { Order } from 'src/app/models/order';
import { OrderService } from './../../../services/order.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss']
})
export class UserDetailsPage implements OnInit {

  id: number;
  user: User;
  amount: number;
  orders: Order[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.route.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.userDetail(this.id);
    this.getOrderFromUser();
    // this.order = this.getOrderFromUser();
  }

  getOrderFromUser() {
    return this.orderService.getAllOrderForUser(null, null, null, this.id).subscribe(
      (res) => {
        console.log(res);

        this.orders = res;
      },
      (err) => {

      });
  }

  userDetail(id) {
    this.userService.getUtilisateur(id).subscribe(res => {
      this.user = res;
    });
  }
}
