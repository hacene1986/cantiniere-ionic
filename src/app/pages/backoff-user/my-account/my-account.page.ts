import { Order } from './../../../models/order';
import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import jwt_decod from 'jwt-decode';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss']
})
export class MyAccountPage implements OnInit {
  id: string;
  id2: number;
  user: User;
  orders: Order[];
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getOrderFromUser();
  }

  getUser() {
    const tok = localStorage.getItem('token');
    const decod = jwt_decod(tok);
    this.user = decod.user;
    this.id = this.user.id.toString();
  }

  getOrderFromUser() {
    this.id2 = +this.id;
    console.log('id : ', this.id);
    console.log('id2 : ', this.id2);

    return this.orderService.getAllOrderForUser(null, null, null, this.id2).subscribe(
      (res) => {
        console.log('res getOrderFromUser : ', res);
        this.orders = res;
      },
      (err) => {
        console.log('erreur getOrderFromUser : ', err);

      });
  }
}
