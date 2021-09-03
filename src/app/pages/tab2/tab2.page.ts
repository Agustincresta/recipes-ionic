import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { IonInfiniteScroll, IonContent } from '@ionic/angular';
import { Ingrediente, Recipe } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  mensaje: string = "";
  recetas: Recipe[] = [];
  numero: number = 0;
  busqueda: string = "";
  boton: boolean = false;

  @ViewChild(IonContent, { static: false }) content: IonContent;

  @ViewChild( IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  constructor(private foodService: FoodService) {}
  

  onSearchChange(event){
    this.numero = 0;
    this.busqueda = event.detail.value
    this.foodService.buscarReceta(event.detail.value,this.numero).subscribe(
      result => {
        this.recetas = []
        
        this.recetas.push(...result.results)

        if (this.recetas.length === 0) {
          this.mensaje ="Result not found, retype your Recipe";
        }else{
          this.mensaje=""
        }
        
        
        
      },
      error => {
        console.log(error)
      }
      )
  }

  loadData( event){
    
    
      this.numero = this.numero + 20;
      this.boton = true;
      this.foodService.buscarReceta(this.busqueda,this.numero).subscribe(
        result => {

          if (this.numero !=  this.recetas.length) {
            this.recetas.push(...result.results);
            event.target.disabled = true;
            event.target.complete();
            return
          }
          this.recetas.push(...result.results)
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

