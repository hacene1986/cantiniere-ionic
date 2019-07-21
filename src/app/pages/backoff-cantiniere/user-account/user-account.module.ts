import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SearchPipe } from '../pipe/search.pipe';

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
    SearchPipe
  ],
  declarations: [UserAccountPage]
})
export class UserAccountPageModule {}
