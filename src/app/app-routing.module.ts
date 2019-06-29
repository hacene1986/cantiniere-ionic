import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'connexion', loadChildren: './pages/connexion/connexion.module#ConnexionPageModule' },
  { path: 'inscription', loadChildren: './pages/inscription/inscription.module#InscriptionPageModule' },
  { path: 'motdepassoublie', loadChildren: './pages/motdepassoublie/motdepassoublie.module#MotdepassoubliePageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'plats', loadChildren: './pages/plats/plats.module#PlatsPageModule' },
  { path: 'panier', loadChildren: './pages/panier/panier.module#PanierPageModule' },
  { path: 'menu/:id', loadChildren: './pages/menudetails/menudetails.module#MenudetailsPageModule' },
  { path: 'my-account', loadChildren: './pages/backoff-user/my-account/my-account.module#MyAccountPageModule' },
  { path: 'user-account', loadChildren: './pages/backoff-cantiniere/user-account/user-account.module#UserAccountPageModule' },
  { path: 'user-details', loadChildren: './pages/backoff-cantiniere/user-details/user-details.module#UserDetailsPageModule' },
  { path: 'account-modifications', loadChildren: './pages/backoff-user/account-modifications/account-modifications.module#AccountModificationsPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
