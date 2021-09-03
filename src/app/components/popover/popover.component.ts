import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { FoodService } from 'src/app/services/food.service';
import { RecipesIngredient } from '../../interfaces/interfaces';
import { ModalComponent } from '../modal/modal.component';
import { Recipe } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  numero = 0
  recetas:RecipesIngredient[] = [];
 
  constructor(public navParams: NavParams, private modalController: ModalController) {
    this.recetas = this.navParams.get('key1')
   }

  ngOnInit() {

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
