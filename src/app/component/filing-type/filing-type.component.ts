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
  
  // selectedOption: string = '0';
  // input1: number = 0;
  // input2: number = 0;
  // input3: number = 0;
  // isDisabled: boolean = true; // Initially disable the inputs

  // toggleInputs() {
  //   this.isDisabled = !this.isDisabled;
  // }
  selectedOption: string = '0';
}


