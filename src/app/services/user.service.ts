import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Est stocké dans une variable d'environnement -> environment.ts
  urlServeur = environment.urlServeurBackEnd;

  constructor(
    private httpClient: HttpClient
  ) { }

  // Méthode pour creer un utilisateur
  creerUtilisateur(user: User): Observable<User> {
    return this.httpClient.put<User>(this.urlServeur + 'user/register', user);
  }

  // Méthode pour update le compte d'un utilisateur
  updateUtilisateur(userId: number, user: User): Observable<User> {
    return this.httpClient.patch<User>(this.urlServeur + 'user/update/' + userId, user);
  }

  // Méthode pour supprimer le compte d'un utilisateur
  deleteUtilisateur(user: User): Observable<User> {
    return this.httpClient.delete<User>(this.urlServeur + 'user/delete/' + user.id);
  }

  // Méthode pour desactiver le compte d'un utilisateur
  desactiverUtilisateur(user: User): Observable<User> {
    return this.httpClient.patch<User>(this.urlServeur + 'user/deactivate/' + user.id, user);
  }

  // Méthode pour activer le compte d'un utilisateur
  activerUtilisateur(user: User): Observable<User> {
    return this.httpClient.patch<User>(this.urlServeur + 'user/activate/' + user.id, user);
  }

  // Méthode pour créditer la cagnotte d'un utilisateur
  crediterUtilisateur(id: string, amount: number): Observable<User> {
    return this.httpClient.post<User>(this.urlServeur + 'user/credit/' + id, amount);
  }

  // Méthode pour débiter la cagnotte d'un utilisateur
  debiterUtilisateur(user: User, amount: number): Observable<User> {
    return this.httpClient.post<User>(this.urlServeur + 'user/debit/' + user.id, amount);
  }

  // Méthode pour récuperer un utilisateur
  getUtilisateur(id: string): Observable<User> {
    return this.httpClient.get<User>(this.urlServeur + 'user/find/' + id);
  }

  // Méthode pour récuperer tous les utilisateur
  getAllUtilisateur(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlServeur + 'user/findall');
  }
}
