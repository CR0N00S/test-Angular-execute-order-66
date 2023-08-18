import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  selectedOption: string = '0'; // Initialize with default value

  @Output() filingTypeComponent = new EventEmitter<string>();

  selectedChange() {
    this.filingTypeComponent.emit(this.selectedOption);
  }
}


