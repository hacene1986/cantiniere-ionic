import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CantiniereMenuPage } from './cantiniere-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CantiniereMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CantiniereMenuPage]
})
export class CantiniereMenuPageModule {}
