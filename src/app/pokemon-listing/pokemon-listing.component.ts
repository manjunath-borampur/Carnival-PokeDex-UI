import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-pokemon-listing',
  templateUrl: './pokemon-listing.component.html',
  styleUrls: ['./pokemon-listing.component.scss']
})
export class PokemonListingComponent implements OnInit{

  constructor( private commonService : CommonService){

  }

  pokemonData:any;
  ngOnInit(): void {
    this.commonService.getPokemonDetails().then(res=>{
      this.pokemonData = res;
      console.log('res',this.pokemonData?.results);
      
    })
  }

}
