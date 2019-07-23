import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditerPlatsPage } from './editer-plats.page';

const routes: Routes = [
  {
    path: '',
    component: EditerPlatsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditerPlatsPage]
})
export class EditerPlatsPageModule {}
