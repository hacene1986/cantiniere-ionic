import { Component, OnInit } from "@angular/core";
import { Order } from "src/app/models/order";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-recap-cantiniere",
  templateUrl: "./recap-cantiniere.page.html",
  styleUrls: ["./recap-cantiniere.page.scss"]
})
export class RecapCantinierePage implements OnInit {
  orders: Array<Order>;
  oderMenu: any;
  constructor(private OrderService: OrderService) {}

  ngOnInit() {
    this.recapOrder();
  }

  recapOrder() {
    this.OrderService.getAllOrder().subscribe(res => {
      console.log(res);
      this.orders = res;
    });
  }
}
