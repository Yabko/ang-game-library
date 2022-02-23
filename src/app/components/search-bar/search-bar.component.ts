import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText!: string;
  @Input() searchLabel: string = "Search";
  @Input() placeholder!: string;

  @Output() onsearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    
  }

  searchFor() {
    this.onsearch.emit(this.searchText);
    }

}
