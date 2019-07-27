import { Component, OnInit } from "@angular/core";
import { Meal } from "../../models/meal";
import { PlatService } from "src/app/services/plat.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cantiniere-plat",
  templateUrl: "./cantiniere-plat.page.html",
  styleUrls: ["./cantiniere-plat.page.scss"]
})
export class CantinierePlatPage implements OnInit {
  viewMode = "tabAll";
  weekNumber = 32;
  listPlatsWeek: Array<Meal>;
  listPlatsToday: Array<Meal>;
  id: string;

  constructor(private platServices: PlatService) {}

  ngOnInit() {
    this.getAllMealsForWeek();
    this.getAllMealsForToday();
  }

  getAllMealsForWeek() {
    this.platServices.getAllMealsForWeek(this.weekNumber).subscribe(
      response => {
        this.listPlatsWeek = response;
        console.log("listPlatsWeek: ", this.listPlatsWeek);
      },
      error => {
        console.log("Error in Plats.ts ... getAllMealsForWeek()", error);
      }
    );
  }

  getAllMealsForToday() {
    this.platServices.getAllMealsForToday().subscribe(
      response => {
        this.listPlatsToday = response;
        console.log("listPlatsToday: ", this.listPlatsToday);
      },
      error => {
        console.log("Error in Plats.ts ... getAllMealsForToday()", error);
      }
    );
  }

  creerPlat(form: NgForm) {
    const meal: Meal = {
      label: form.value.label,
      description: form.value.description,
      priceDF: form.value.priceDF,
      image: form.value.image,
      ingredients: form.value.ingredients,
      availableForWeeks: form.value.availableForWeeks
    };

    this.platServices.addMeal(meal).subscribe(plat => {
      console.log("ok");
      form.reset();
    });
  }
}
