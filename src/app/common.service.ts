import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http : HttpClient) { }

  getPokemonDetails(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=10').toPromise();
  }
}
