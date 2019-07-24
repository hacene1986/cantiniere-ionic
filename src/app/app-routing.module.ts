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
  { path: 'user-details/:id', loadChildren: './pages/backoff-cantiniere/user-details/user-details.module#UserDetailsPageModule' },
  { path: 'account-modifications', loadChildren: './pages/backoff-user/account-modifications/account-modifications.module#AccountModificationsPageModule' },
  { path: 'contact', loadChildren: './pages/contact/contact.module#ContactPageModule' },
  { path: 'cantiniere-menu', loadChildren: './pages/cantiniere-menu/cantiniere-menu.module#CantiniereMenuPageModule' },
  { path: 'cantiniere-plat', loadChildren: './pages/cantiniere-plat/cantiniere-plat.module#CantinierePlatPageModule' },
  { path: 'recap-cantiniere', loadChildren: './pages/backoff-cantiniere/recap-cantiniere/recap-cantiniere.module#RecapCantinierePageModule' },
  { path: 'crediter/:id', loadChildren: './pages/backoff-cantiniere/crediter/crediter.module#CrediterPageModule' },
  { path: 'delete-account', loadChildren: './pages/backoff-user/delete-account/delete-account.module#DeleteAccountPageModule' },
  { path: 'delete-order', loadChildren: './pages/backoff-cantiniere/delete-order/delete-order.module#DeleteOrderPageModule' },
  { path: 'add-plats', loadChildren: './pages/backoff-cantiniere/add-plats/add-plats.module#AddPlatsPageModule' },
  { path: 'editer-plats', loadChildren: './pages/backoff-cantiniere/editer-plats/editer-plats.module#EditerPlatsPageModule' },
  { path: 'delete-plats', loadChildren: './pages/backoff-cantiniere/delete-plats/delete-plats.module#DeletePlatsPageModule' },
  { path: 'delete-menus', loadChildren: './pages/backoff-cantiniere/delete-menus/delete-menus.module#DeleteMenusPageModule' },
  { path: 'add-menus', loadChildren: './pages/backoff-cantiniere/add-menus/add-menus.module#AddMenusPageModule' },
  { path: 'editer-menus', loadChildren: './pages/backoff-cantiniere/editer-menus/editer-menus.module#EditerMenusPageModule' },
  { path: 'debiter/:id', loadChildren: './pages/backoff-cantiniere/debiter/debiter.module#DebiterPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
