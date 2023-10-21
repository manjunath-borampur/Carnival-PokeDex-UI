import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-pokemon-listing',
  templateUrl: './pokemon-listing.component.html',
  styleUrls: ['./pokemon-listing.component.scss']
})
export class PokemonListingComponent implements OnInit{

  constructor( private commonService : CommonService, private router : Router, private ngxLoader : NgxUiLoaderService){

  }

  pokemonData:any = [];
  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.ngxLoader.start();
    this.commonService.getPokemonDetails().subscribe((res: any) => {
      res?.results.forEach((result: any) => {
        this.commonService.getMorePokemonDetails(result?.name).subscribe((data: any) => {
          this.pokemonData.push(data)
        })
      });
      this.ngxLoader.stop();
    })
  }

  getFullDetails(pokemon:any){
    this.router.navigateByUrl(`/details/${pokemon?.id}`)
  }

  onTextSearch:string = ''
  receiveSearcVal(search:any){
    this.onTextSearch = search;
  }

  isSwitchOn:boolean = false;
  onChange(event:any){
    this.isSwitchOn = !this.isSwitchOn;
  }

}
