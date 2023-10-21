import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private http : HttpClient) { }

  // I am planning to take only 200 Pokemon from API that why i have added limit=200;
  getPokemonDetails(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=200');
  }

  getMorePokemonDetails(name:any){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getMorePokemonDetailsById(id:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
