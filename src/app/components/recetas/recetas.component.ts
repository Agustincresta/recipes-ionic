import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FoodService } from 'src/app/services/food.service';
import { Recipe, randomRecipe } from '../../interfaces/interfaces';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss'],
})
export class RecetasComponent implements OnInit {
  @Input() recetas: Recipe[];

  /*recetas: Recipe[] = [
    {
      "id": 716429,
      "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
      "image": "https://spoonacular.com/recipeImages/716429-312x231.jpg",
      "imageType": "jpg"

  },
  {
      "id": 715538,
      "title": "Bruschetta Style Pork & Pasta",
      "image": "https://spoonacular.com/recipeImages/715538-312x231.jpg",
      "imageType": "jpg",

  }
  ];*/
  
  randoms: randomRecipe[] = [];
  
  numero: number = 0;
  constructor(private modalController: ModalController, private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getRandom(this.numero).subscribe(
      result => {
        
        this.randoms.push(...result.recipes)
      },
      error =>{
        console.log(error)
      }
      );
  }

  async mostrarModal(receta: Recipe) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        receta
      }
    });
    await modal.present();

  }

}
