import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RootObject, Recipes, resultRandom, RecipesIngredient } from '../interfaces/interfaces';


const url = environment.url;
const ApiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http: HttpClient){

  }

  private ejecutarQuery<T>( query: string){
    query = url+ query;

    query += `&apiKey=${ApiKey}`;

    return this.http.get<any>(query);
  }


  buscarIngrediente(busqueda: string, numero: number){
    const query = `/food/ingredients/search?query=${busqueda}&offset=${numero}&number=20`;

    return this.ejecutarQuery<RootObject>(query);
  }

  imagen(query: string){
    const src = `/cdn/ingredients_100x100/${query}`;

    query = "https://spoonacular.com" + src;

    return this.http.get<any>(query)
  }

  buscarReceta(busqueda: string, numero: number){
    const query = `/recipes/complexSearch?query=${busqueda}&offset=${numero}&number=20`;

    return this.ejecutarQuery<Recipes>(query);
  }

  infoReceta( numero: number){
    const query = `/recipes/${numero}/information?includeNutrition=false`;
    
    
    return this.ejecutarQuery(query);
  }

  getRandom(numero: number){
    const query = `/recipes/random?&offset=${numero}&number=20`;
    
    return this.ejecutarQuery<resultRandom>(query);
  }

  getRecetaIng(ingredient: string){
    const query = `/recipes/findByIngredients?ingredients=${ingredient}&number=20`;
    
    return this.ejecutarQuery<RecipesIngredient>(query);
  }

}
