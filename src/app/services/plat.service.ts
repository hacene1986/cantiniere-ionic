import { Observable } from 'rxjs';
import { Meal } from '../models/meal';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private httpClient: HttpClient) { }

  // Méthode pour récupérer tous les plats de la semaine
  getAllMealsForWeek(weekNumber: number): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(environment.urlServeurBackEnd + 'meal/findallavailableforweek/' + weekNumber);
  }

  // Méthode pour récupérer tous les plats du jour
  getAllMealsForToday(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(environment.urlServeurBackEnd + 'meal/findallavailablefortoday');
  }

  // Méthode pour récupérer un plat
  getMeal(meal: Meal): Observable<Meal> {
    return this.httpClient.get<Meal>(environment.urlServeurBackEnd + 'meal/find/' + meal);
  }

  // PROCHAINES METHODES SEULEMENT POUR LA CANTINIERE
  // Méthode pour récupérer tous les plats
  getAllMeal(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(environment.urlServeurBackEnd + 'meal/findall');
  }

  // Méthode pour ajouter un plat
  addMeal(meal: Meal): Observable<Meal> {
    return this.httpClient.post<Meal>(environment.urlServeurBackEnd + 'meal/add', meal);
  }

  // Méthode pour supprimer un plat
  deleteMeal(meal: Meal): Observable<Meal> {
    return this.httpClient.delete<Meal>(environment.urlServeurBackEnd + 'meal/delete/' + meal);
  }

  // Méthode pour update un plat
  updateMeal(mealId: number, meal: Meal): Observable<Meal> {
    return this.httpClient.patch<Meal>(environment.urlServeurBackEnd + 'meal/update/' + mealId, meal);
  }
}
