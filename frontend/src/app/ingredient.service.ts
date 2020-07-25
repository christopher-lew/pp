import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  uri = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  getIngredients(){
    console.log("Getting Ingredients from " + `${this.uri}/api/posts`);
    return this.http.get(`${this.uri}/api/posts`);
  }

  getIngredientById(id){
    return this.http.get(`${this.uri}/api/posts/${id}`);
  }

  createIngredient(name){
    const ingredient = {
      name: name,
    }
    console.log("Creating new ingredient " + ingredient.name);
    return this.http.post(`${this.uri}/api/posts/create`, ingredient);
  }

  updateIngredient(id, name){
    const ingredient ={
      name: name,
    }
    console.log("Updating existing ingredient " + ingredient.name);
    return this.http.put(`${this.uri}/api/posts/${id}`, ingredient)
  }

  deleteIngredient(id){
    console.log("Deleting ingredient " + id);
    return this.http.delete(`${this.uri}/api/posts/${id}`);
  }

}
