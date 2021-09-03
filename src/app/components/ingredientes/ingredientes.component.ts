import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Ingrediente } from 'src/app/interfaces/interfaces';
import { FoodService } from 'src/app/services/food.service';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss'],
})
export class IngredientesComponent implements OnInit {
  @Input() ingredients: Ingrediente[]
  constructor(private foodService: FoodService,public popoverController: PopoverController) { }

  ngOnInit() {

  }

  presentPopover(ev:any,ingredient: Ingrediente){

    this.foodService.getRecetaIng(ingredient.name).subscribe(
      async result =>{
        console.log(result);
        const popover = await this.popoverController.create({
          
          component: PopoverComponent,
          event: ev,
          translucent: true,
          componentProps: { key1:result},
        });
    
        await popover.present();
    
        const {data} = await popover.onWillDismiss();
        
        
      },
      error =>{
        console.log(error)
      }
    );
  }

}
