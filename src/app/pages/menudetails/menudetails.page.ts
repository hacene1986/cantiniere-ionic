import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menudetails',
  templateUrl: './menudetails.page.html',
  styleUrls: ['./menudetails.page.scss'],
})
export class MenudetailsPage implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
