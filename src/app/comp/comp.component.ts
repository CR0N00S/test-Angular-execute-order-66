import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  name: string = '';
  isHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  hideInputAndImage() {
    this.isHidden = !this.isHidden;

  }
  input1: number = 0;
  input2: number = 0;
  input3: number = 0;
  isDisabled: boolean = true; // Initially disable the inputs

  toggleInputs() {
    this.isDisabled = !this.isDisabled;
  }

  selectedMonthFromChild: string = '';
  selectedYearFromChild: string = new Date().getFullYear().toString();

  onMonthSelected(month: string) {
    this.selectedMonthFromChild = month;
    console.log('Selected month from child:', month);
  }
  onYearSelected(year: string) {
    this.selectedYearFromChild = year;
    console.log('Selected year from child:', year);
  }

}
