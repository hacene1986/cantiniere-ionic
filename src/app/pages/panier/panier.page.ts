import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Quantity } from './../../models/quantity';
import { Menu } from './../../models/menu';
import { Order } from './../../models/order';
import { OrderService } from './../../services/order.service';
import { Meal } from 'src/app/models/meal';
import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss']
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
    private toastController: ToastController,
    private router: Router
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
    this.menuPanier = JSON.parse(localStorage.getItem('panier'));
    // Pour supprimer 'panier' du localstorage s'il est vide
    if (JSON.stringify(this.menuPanier) === '[]') {
      localStorage.removeItem('panier');
    }
  }

  // Méthode qui permet de supprimer un menu du panier
  supprimerMenu(i) {
    const storagePanier = JSON.parse(localStorage.getItem('panier'));
    storagePanier.splice(i, 1);
    localStorage.setItem('panier', JSON.stringify(storagePanier));
    this.ngOnInit();
    this.toastSupprimerMenu();
  }

  // Pour calculer le prix total du panier
  calculerTotalPanier() {
    this.local = localStorage.getItem('panier');
    this.listArticles = JSON.parse(this.local);
    console.log(this.listArticles);
    this.prixTotalPanier = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.listArticles.length; i++) {
      this.prixTotalPanier = this.prixTotalPanier + (this.listArticles[i].menu.priceDF * this.listArticles[i].quantity);
      console.log(this.prixTotalPanier);
    }
  }

  creerLaCommande() {
    const user = this.userConnected;
    const menu = this.menuPanier;

    if (this.userConnected.wallet < this.prixTotalPanier) {
      this.toastCagnotteTropFaible();
    } else {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.listArticles.length; i++) {

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
              this.toastCommander();
              localStorage.removeItem('panier');
              this.router.navigate(['/']);

              console.log('order retour: ', this.order);
            },
            (error) => {
              this.toastCommanderAvant();
              console.log('Error in Order.ts ... addOrder()', error);
              console.log('order: ', this.order);
            }
          );
      }
    }

  }

  async toastSupprimerMenu() {
    const toast = await this.toastController.create({
      message: 'Menu supprimé du panier',
      position: 'bottom',
      color: 'success',
      duration: 3500,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async toastCommander() {
    const toast = await this.toastController.create({
      message: 'Votre commande a été enregistrée.',
      position: 'bottom',
      color: 'success',
      duration: 3500,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async toastCommanderAvant() {
    const toast = await this.toastController.create({
      message: 'Vous devez commander avant 10h30',
      position: 'bottom',
      color: 'danger',
      duration: 10000,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async toastCagnotteTropFaible() {
    const toast = await this.toastController.create({
      message: 'Vous n\'avez pas assez d\'argent dans votre cagnotte',
      position: 'bottom',
      color: 'danger',
      duration: 10000,
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
