import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Menu } from "./../../models/menu";
import { MenuService } from "src/app/services/menu.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menudetails",
  templateUrl: "./menudetails.page.html",
  styleUrls: ["./menudetails.page.scss"]
})
export class MenudetailsPage implements OnInit {
  id: number;
  sub: any;
  menu: Menu;
  quantity = "1";
  isLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"), 0);
    this.menuService.getMenuById(this.id).subscribe(
      response => {
        this.menu = response;
        console.log("menu: ", this.menu);
        this.isLoaded = true;
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  // Méthode du modal, qui valide l'ajout du menu dans le panier
  validerAjoutPanier(menu, quantity) {
    let panier = [];
    if (localStorage.getItem("panier")) {
      panier = JSON.parse(localStorage.getItem("panier"));
    }
    panier.push({ quantity, menu });
    localStorage.setItem("panier", JSON.stringify(panier));

    this.toastSuccess();
    console.log(JSON.parse(localStorage.getItem("panier")));
    this.router.navigate(["/panier"]);
  }

  async toastSuccess() {
    const toast = await this.toastController.create({
      message: "Menu ajouté au panier",
      position: "bottom",
      color: "success",
      duration: 3000,
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

  async toastError() {
    const toast = await this.toastController.create({
      message: "Erreur serveur",
      position: "bottom",
      color: "danger",
      duration: 5000,
      buttons: [
        {
          side: "start",
          icon: "star",
          text: "Favorite",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Done",
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
