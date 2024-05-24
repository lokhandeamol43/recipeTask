import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiKey = '9cdb5006fdb24da88ca6842a80a048fd';
  apiUrl = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) { }

  getSearchResults(searchText: string) {
    const url = `${this.apiUrl}/recipes/complexSearch?query=${searchText}&number=5&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getRecipeInformation(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/information?includeNutrition=false&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }

  getInstructions(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/analyzedInstructions?apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}
