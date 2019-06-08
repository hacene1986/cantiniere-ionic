import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MotdepassoubliePage } from './motdepassoublie.page';

const routes: Routes = [
  {
    path: '',
    component: MotdepassoubliePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MotdepassoubliePage]
})
export class MotdepassoubliePageModule {}
