import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { NotasPage } from './notas.page';
import { NotasPageRoutingModule } from './notas-routing.module';
import { AddNotaComponent } from '../add-nota/add-nota.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NotasPageRoutingModule
  ],
  declarations: [NotasPage, AddNotaComponent],
  entryComponents: [AddNotaComponent]
})
export class NotasPageModule {}
