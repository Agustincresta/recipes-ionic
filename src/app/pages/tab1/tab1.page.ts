import { Component, Input, ViewChild } from '@angular/core';
import { IonContent, IonInfiniteScroll } from '@ionic/angular';
import { Ingrediente } from 'src/app/interfaces/interfaces';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mensaje: string = "Enter an ingredient in the search engine";
  ingredients: Ingrediente[] = [];
  numero: number = 0;
  busqueda: string = "";
  boton: boolean = false;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private foodService: FoodService) { }



  onSearchChange(event) {
    this.numero = 0;
    this.busqueda = event.detail.value
    this.foodService.buscarIngrediente(event.detail.value, this.numero).subscribe(
      result => {
        this.ingredients = []

        this.ingredients.push(...result.results)

        if (this.ingredients.length === 0) {
          this.mensaje = "Result not found, retype your ingredient";
        } else {
          this.mensaje = ""
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  loadData(event) {
  this.numero = this.numero + 20;
  this.boton = true;
  this.foodService.buscarIngrediente(this.busqueda, this.numero).subscribe(
      result => {
        
        if (this.numero != this.ingredients.length) {
          this.ingredients.push(...result.results);
          event.target.disabled = true;
          event.target.complete();
          return
        }
        this.ingredients.push(...result.results)
        event.target.complete();
        return
      },
      error => {
        console.log(error)
      }
    )
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }


}
