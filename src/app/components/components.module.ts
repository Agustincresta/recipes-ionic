import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { IonicModule } from '@ionic/angular';
import { RecetasComponent } from './recetas/recetas.component';
import { ModalComponent } from './modal/modal.component';
import { PopoverComponent } from './popover/popover.component';




@NgModule({
  declarations: [
    IngredientesComponent,
    RecetasComponent,
    ModalComponent,
    PopoverComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    IngredientesComponent,
    RecetasComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
