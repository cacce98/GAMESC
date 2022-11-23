import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonajesPageRoutingModule } from './personajes-routing.module';

import { PersonajesPage } from './personajes.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesPageRoutingModule,
    //Indicamos el uso del nuevo módulo
    ComponentesModule
  ],
  declarations: [PersonajesPage]
})
export class PersonajesPageModule {}
