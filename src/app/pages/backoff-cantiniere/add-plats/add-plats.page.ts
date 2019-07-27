import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Meal } from "../../../models/meal";
//import { ActivatedRoute } from '@angular/router';
import { PlatService } from "src/app/services/plat.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-plats",
  templateUrl: "./add-plats.page.html",
  styleUrls: ["./add-plats.page.scss"]
})
export class AddPlatsPage implements OnInit {
  viewMode = "tabAll";
  weekNumber = 32;
  listPlatsWeek: Array<Meal>;
  listPlatsToday: Array<Meal>;
  id: string;

  constructor(private platServices: PlatService) {}

  ngOnInit() {}

  addMeal(form: NgForm) {
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
      window.location.reload();
    });
  }
}
