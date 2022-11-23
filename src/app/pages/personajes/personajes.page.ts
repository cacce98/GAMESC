import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { RespuestaDB, Dato } from '../../interfaces/interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})

export class PersonajesPage implements OnInit {

  personajes : Dato[]=[];

  constructor(private servecioPersonajes: PersonajesService) { }

  ngOnInit() {
    this.servecioPersonajes.getDatos()
    .subscribe((resp: RespuestaDB ) => {
      console.log('Personajes', resp.datos);
      this.personajes=resp.datos;
    });
    }
  }


