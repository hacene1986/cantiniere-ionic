import { ToastController } from "@ionic/angular";
import { Quantity } from "./../../models/quantity";
import { Menu } from "./../../models/menu";
import { Order } from "./../../models/order";
import { OrderService } from "./../../services/order.service";
import { Meal } from "src/app/models/meal";
import { AuthentificationService } from "./../../services/authentification.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user";

@Component({
  selector: "app-panier",
  templateUrl: "./panier.page.html",
  styleUrls: ["./panier.page.scss"]
})
export class PanierPage implements OnInit {
  menuPanier: [];
  userConnected: User;
  isAuth: boolean;
  prixTotalPanier: any = 0;
  local: any;
  listArticles: Menu[] = [];
  price: number;
  order: Order;

  constructor(
    // private snackbar: MatSnackBar,
    private auth: AuthentificationService,
    private orderService: OrderService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.auth.isLogged()) {
      this.isAuth = true;
      this.userConnected = this.auth.getUserConnected();
    } else {
      this.userConnected = null;
      this.isAuth = false;
    }
    this.recupererPanier();
    this.calculerTotalPanier();
  }

  // Initialiser le panier
  recupererPanier() {
    this.menuPanier = JSON.parse(localStorage.getItem("panier"));
    // Pour supprimer 'panier' du localstorage s'il est vide
    if (JSON.stringify(this.menuPanier) === "[]") {
      localStorage.removeItem("panier");
    }
  }

  // Méthode qui permet de supprimer un menu du panier
  supprimerMenu(i) {
    const storagePanier = JSON.parse(localStorage.getItem("panier"));
    storagePanier.splice(i, 1);
    localStorage.setItem("panier", JSON.stringify(storagePanier));
    this.ngOnInit();
    this.toastSuccess();
  }

  // Pour calculer le prix total du panier
  calculerTotalPanier() {
    this.local = localStorage.getItem("panier");
    this.listArticles = JSON.parse(this.local);
    console.log(this.listArticles);
    this.prixTotalPanier = 0;
    for (let i = 0; i < this.listArticles.length; i++) {
      this.prixTotalPanier = this.prixTotalPanier + (this.listArticles[i].menu.priceDF * this.listArticles[i].quantity);
      console.log(this.prixTotalPanier);
    }
  }

  creerLaCommande() {
    const user = this.userConnected;

    const menu = this.menuPanier;

    for (let i = 0; i < this.listArticles.length; i++) {
      // const element = this.listArticles[i];
      // console.log(element.menu.id);

      this.order = {
        status: 0,
        creationDate: new Date(),
        menuId: this.listArticles[i].menu.id,
        userId: this.userConnected.id,
        quantities: null,
      };

      this.orderService.addOrder(this.order)
        .subscribe(
          (response) => {
            this.order = response;
            console.log('order retour: ', this.order);
          },
          (error) => {
            console.log('Error in Order.ts ... addOrder()', error);
            console.log('order: ', this.order);
          }
        );
    }
  }

  async toastSuccess() {
    const toast = await this.toastController.create({
      message: "Menu supprimé du panier",
      position: "bottom",
      color: "danger",
      duration: 3500,
      buttons: [
        {
          text: "OK",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    toast.present();
  }
}
