import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit{

  constructor( 
    private route : ActivatedRoute,
    private commonService : CommonService,
    private router : Router,
    private ngxLoader : NgxUiLoaderService){

  }

  id: any = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.id && this.getMorePokemonDetailsById();
  }

  details:any;
  getMorePokemonDetailsById(){
    this.ngxLoader.start();
    this.commonService.getMorePokemonDetailsById(this.id).subscribe(res=>{
      this.details = res;
      this.ngxLoader.stop();
    })
  }

  goBack(){
    this.router.navigate([`/`])
  }

}
