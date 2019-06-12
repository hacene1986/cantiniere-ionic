import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'connexion', loadChildren: './pages/connexion/connexion.module#ConnexionPageModule' },
  { path: 'inscription', loadChildren: './pages/inscription/inscription.module#InscriptionPageModule' },
  { path: 'motdepassoublie', loadChildren: './pages/motdepassoublie/motdepassoublie.module#MotdepassoubliePageModule' },  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'plats', loadChildren: './pages/plats/plats.module#PlatsPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
