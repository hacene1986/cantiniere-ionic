// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Menu } from './../../models/menu';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { ToastController } from '@ionic/angular';
// import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // Pour afficher l'onglet Formules (menu) par défaut
  viewMode = 'tabToday';

  // Pour initialiser le numéro de la semaine
  weekNumber: number;
  dateWeek = new Date();
  yearStart: any;

  listMenuThisWeek: Array<Menu>;
  listMenuToday: Array<Menu>;

  quantity = '1';

  constructor(
    private menuService: MenuService,
    public toastController: ToastController,
    private router: Router,
  ) { }

  // On initialise la vue en calculant le numéro de la semaine, et en récupérant tous les menu du jour et de la semaine
  ngOnInit() {
    this.getWeekNumber(this.dateWeek);
    this.getAllMenuForWeek();
    this.getAllMenuForToday();
  }

  getAllMenuForWeek() {
    this.menuService.getAllMenuForWeek(this.weekNumber)
      .subscribe(
        (response) => {
          this.listMenuThisWeek = response;
          console.log('listMenuThisWeek: ', this.listMenuThisWeek);
        },
        (error) => {
          console.log('Error in Menu.ts ... getAllMenuForWeek()', error);
        }
      );
  }

  getAllMenuForToday() {
    this.menuService.getAllMenuForToday()
      .subscribe(
        (response) => {
          this.listMenuToday = response;
          console.log('listMenuToday: ', this.listMenuToday);
        },
        (error) => {
          console.log('Error in Menu.ts ... getAllMenuForToday()', error);
        }
      );
  }

  // Méthode pour récupérer le numéro de la semaine actuelle
  getWeekNumber(dateWeek) {
    dateWeek = new Date(Date.UTC(dateWeek.getFullYear(), dateWeek.getMonth(), dateWeek.getDate()));
    dateWeek.setUTCDate(dateWeek.getUTCDate() + 4 - (dateWeek.getUTCDay() || 7));
    this.yearStart = new Date(Date.UTC(dateWeek.getUTCFullYear(), 0, 1));
    this.weekNumber = Math.ceil((((dateWeek - this.yearStart) / 86400000) + 1) / 7);
    console.log('Date de la semaine : ' + dateWeek.getUTCFullYear(), this.weekNumber);

    return this.weekNumber;
  }

  // // Méthode pour ouvrir le détail du menu
  openDetailMenu(id) {
    this.router.navigate(['/menu', id]);
    // this.modalService.open(ajoutPanier, { ariaLabelledBy: 'modal-basic-title', centered: true })
    //   .result.then((result) => {
    //     this.closeModal();
    //   }, (reason) => {
    //     this.closeModal();
    //   });
  }

  // Méthode du bouton "+" de la card pour directement ajouter un menu dans le panier
  addToPanier(menu) {
    console.log(menu);
    let panier = [];
    if (localStorage.getItem('panier')) {
      panier = JSON.parse(localStorage.getItem('panier'));
    }
    panier.push({ quantity: this.quantity, menu });
    localStorage.setItem('panier', JSON.stringify(panier));
    this.toastSuccess();
    console.log(JSON.parse(localStorage.getItem('panier')));
  }

  async toastSuccess() {
    const toast = await this.toastController.create({
      message: 'Menu ajouté au panier',
      position: 'bottom',
      color: 'success',
      duration: 3000,
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


  async toastError() {
    const toast = await this.toastController.create({
      message: 'Erreur serveur',
      position: 'bottom',
      color: 'danger',
      duration: 5000,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
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
