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

  onTextSearch:string = ''
  isSwitchOn:boolean = false;

  constructor( private commonService : CommonService, private router : Router, private ngxLoader : NgxUiLoaderService){

  }

  pokemonAllData:any = [];
  ngOnInit(): void {
    this.getAllPokemons();
  }

  totalItemsfromAPI:any;
  itemPerPage = 20;
  currentPage = 1;

  getAllPokemons(){
    this.ngxLoader.start();
    this.commonService.getPokemonDetails().subscribe((res: any) => {
      res?.results.forEach((result: any) => {
        this.commonService.getMorePokemonDetails(result?.name).subscribe((data: any) => {
          this.pokemonAllData.push(data)
          this.totalItemsfromAPI = this.pokemonAllData.length;
        })
      });
      this.ngxLoader.stop();
    })
  }

  getFullDetails(pokemon:any){
    this.router.navigateByUrl(`/details/${pokemon?.id}`)
  }

  receiveSearcVal(search:any){
    this.onTextSearch = search;
  }
  
  onChange(event:any){
    this.isSwitchOn = !this.isSwitchOn;
  }

  onPageChange(page:any){
    this.currentPage = page;
  }

  get pokemonData(){
      const start = (this.currentPage-1) * this.itemPerPage;
      const end = start + this.itemPerPage;
       return this.pokemonAllData.slice(start,end)
  }

}
