import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getDatos(){
    return this.http.get('https://chichen-be83d-default-rtdb.firebaseio.com/personajes/.json')
  }
}
