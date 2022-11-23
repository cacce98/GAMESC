import { Component } from '@angular/core';

interface Menu{
  icono: string;
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  elementos: Menu[]= [
    { //Primer elemento de la lista
      icono: 'newspaper-sharp',
      nombre: 'Historia',
      ruta: '/historia'
    },
    { //Primer elemento de la lista
      icono: 'people-sharp',
      nombre: 'Acerca de',
      ruta: '/acerca'
    },
    {
      icono: 'accessibility-sharp',
      nombre:'Contenido',
      ruta: '/personajes'
    },
    {
      icono: 'trophy-sharp',
      nombre:'Logros',
      ruta: '/logros'
    },
    
  ];
  constructor() {}
}
