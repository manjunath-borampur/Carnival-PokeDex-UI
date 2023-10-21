import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges{
  
  @Input() totalItems:any;
  @Input() currentPage:any;
  @Input() itemPerPage:any;
  @Output() onClick:EventEmitter<any> = new EventEmitter();
  totalPages = 0;
  pages:number[] = []

  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
    this.getPaginatedVal();
  }

  ngOnInit(): void {
    this.getPaginatedVal();
  }

  getPaginatedVal(){
    if(this.totalItems){
      this.totalPages = Math.ceil(this.totalItems / this.itemPerPage)
      this.pages = Array.from({ length: this.totalPages}, (_, i)=> i+1);
    }
  }

  onPageClick(page:any){
    if(page>this.totalPages) return
    this.onClick.emit(page)
  }


}
