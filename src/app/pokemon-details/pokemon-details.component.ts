import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit{

  constructor( private route : ActivatedRoute, private commonService : CommonService, private router : Router){

  }

  id: any = this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.id && this.getMorePokemonDetailsById();
  }

  details:any;
  getMorePokemonDetailsById(){
    this.commonService.getMorePokemonDetailsById(this.id).subscribe(res=>{
      this.details = res;
    })
  }

  goBack(){
    this.router.navigate([`/`])
  }

}
