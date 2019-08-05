import { Component, OnInit } from "@angular/core";
import { Menu } from "../../../models/menu";
import { MenuService } from "src/app/services/menu.service";

@Component({
  selector: "app-delete-menus",
  templateUrl: "./delete-menus.page.html",
  styleUrls: ["./delete-menus.page.scss"]
})
export class DeleteMenusPage implements OnInit {
  viewMode = "tabToday";
  weekNumber = 49;
  listMenuThisWeek: Array<Menu>;
  listMenuToday: Array<Menu>;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.getAllMealsForToday();
    this.getAllMealsForWeek();
  }

  getAllMealsForWeek() {
    this.menuService.getAllMenuForWeek(this.weekNumber).subscribe(
      response => {
        this.listMenuThisWeek = response;
      },
      error => {
        console.log("Error in Plats.ts ... getAllMealsForWeek()", error);
      }
    );
  }

  getAllMealsForToday() {
    this.menuService.getAllMenuForToday().subscribe(
      response => {
        this.listMenuToday = response;
      },
      error => {
        console.log("Error in Plats.ts ... getAllMealsForToday()", error);
      }
    );
  }

  deleteMenu(id) {
    this.menuService.deleteMenu(id).subscribe(successCode => {
      this.listMenuThisWeek = this.listMenuThisWeek.filter(
        listMenuThisWeek => listMenuThisWeek.id !== id
      );
      this.listMenuToday = this.listMenuToday.filter(
        listMenuToday => listMenuToday.id !== id
      );
    });
  }
}
