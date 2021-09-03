import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recipe } from 'src/app/interfaces/interfaces';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  recetaInfo: any;
  @Input() receta: Recipe;

  constructor(private modalController: ModalController, private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.infoReceta(this.receta.id).subscribe(
        result => {
            
            this.recetaInfo = result;
        },
        error => {
            console.log(error);
        }
    )

  }

  salirSinArgumentos(){
    this.modalController.dismiss();
  }



  
}
