import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Meal } from "../../../models/meal";
import { ActivatedRoute } from "@angular/router";
import { PlatService } from "src/app/services/plat.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-editer-plats",
  templateUrl: "./editer-plats.page.html",
  styleUrls: ["./editer-plats.page.scss"]
})
export class EditerPlatsPage implements OnInit {
  id: string;
  meal: Object;

  constructor(
    private platServices: PlatService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.getMeal(this.id);
  }

  getMeal(id) {
    console.log(id);
    this.platServices.getMeal(id).subscribe(res => {
      console.log(res);
      this.meal = res;
    });
  }

  editMeal(form: NgForm) {
    this.platServices.updateMeal(this.id, form.form.value).subscribe(meal => {
      console.log("ok");
      form.reset();
      window.location.reload();
    });
  }
}
