import { Component, OnInit } from "@angular/core";
import { Menu } from "../../../models/menu";
import { MenuService } from "src/app/services/menu.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-add-menus",
  templateUrl: "./add-menus.page.html",
  styleUrls: ["./add-menus.page.scss"]
})
export class AddMenusPage implements OnInit {
  viewMode = "tabToday";
  weekNumber = 49;
  listMenuThisWeek: Array<Menu>;
  listMenuToday: Array<Menu>;

  constructor(private menuService: MenuService) {}

  ngOnInit() {}
  addMenu(form: NgForm) {
    const menu: Menu = {
      label: form.value.label,
      description: form.value.description,
      priceDF: form.value.priceDF,
      image: form.value.image,
      meals: form.value.meals,
      availableForWeeks: form.value.availableForWeeks
    };
    console.log(menu);
    this.menuService.addMenu(menu).subscribe(menu => {
      console.log(menu);
      form.reset();
      window.location.reload();
    });
  }
}
