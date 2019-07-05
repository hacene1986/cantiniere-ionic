import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecapCantinierePage } from './recap-cantiniere.page';

const routes: Routes = [
  {
    path: '',
    component: RecapCantinierePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecapCantinierePage]
})
export class RecapCantinierePageModule {}
