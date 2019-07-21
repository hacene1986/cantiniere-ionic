import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from '../pipe/pipe.module';

import { IonicModule } from '@ionic/angular';

import { UserAccountPage } from './user-account.page';

const routes: Routes = [
  {
    path: '',
    component: UserAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [UserAccountPage]
})
export class UserAccountPageModule {}
