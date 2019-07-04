import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CantinierePlatPage } from './cantiniere-plat.page';

const routes: Routes = [
  {
    path: '',
    component: CantinierePlatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CantinierePlatPage]
})
export class CantinierePlatPageModule {}
