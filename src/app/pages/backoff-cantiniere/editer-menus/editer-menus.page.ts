import { Component, OnInit } from "@angular/core";
import { MenuService } from "../../../services/menu.service";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-editer-menus",
  templateUrl: "./editer-menus.page.html",
  styleUrls: ["./editer-menus.page.scss"]
})
export class EditerMenusPage implements OnInit {
  id: string;
  menu: Object;

  constructor(private menuService: MenuService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => (this.id = params.id));
  }

  ngOnInit() {
    this.getMenu(this.id);
  }

  getMenu(id) {
    console.log(id);
    this.menuService.getMenu(id).subscribe(res => {
      console.log(res);
      this.menu = res;
    });
  }

  editMenu(form: NgForm) {
    console.log(form.form.value);
    this.menuService.updateMenu(this.id, form.form.value).subscribe(menu => {
      console.log("ok");
      form.reset();
      window.location.reload();
    });
  }
}
