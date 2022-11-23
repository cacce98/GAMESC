import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaPageRoutingModule } from './acerca-routing.module';

import { AcercaPage } from './acerca.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaPageRoutingModule,
    //Indicamos el uso del nuevo módulo
    ComponentesModule
  ],
  declarations: [AcercaPage]
})
export class AcercaPageModule {}
