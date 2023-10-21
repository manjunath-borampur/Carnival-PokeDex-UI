import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  filteredData = '';

  @Output()
  emitSearchValue :EventEmitter<string> = new EventEmitter<string>()

  onSearch(){
    this.emitSearchValue.emit(this.filteredData)
  }

}
