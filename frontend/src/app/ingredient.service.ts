import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  uri = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getIngredients(){
    console.log("Getting Ingredients from " + `${this.uri}/api/ingredients`);
    return this.http.get(`${this.uri}/api/ingredients`);
  }

  getIngredientById(id){
    return this.http.get(`${this.uri}/api/ingredients/${id}`);
  }

  createIngredient(name){
    const ingredient = {
      name: name,
    }
    console.log("Creating new ingredient " + ingredient.name);
    return this.http.post(`${this.uri}/api/ingredients/create`, ingredient);
  }

  updateIngredient(id, name){
    const ingredient ={
      name: name,
    }
    console.log("Updating existing ingredient " + ingredient.name);
    return this.http.put(`${this.uri}/api/ingredients/${id}`, ingredient)
  }

  deleteIngredient(id){
    console.log("Deleting ingredient " + id);
    return this.http.delete(`${this.uri}/api/ingredients/${id}`);
  }

}
