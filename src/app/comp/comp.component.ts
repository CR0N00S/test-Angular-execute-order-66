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
  // selectedSaleAmountFromChild: number = 0;
  selectedFilingTypeFromChild: string = '0'; // Initialize with default value
  // submittedAmountNumber: number = 0;
  // submittedAmountNumber: number = 0;
  submittedAmountNumber: number = 0;
  multipliedAmount: number = 0;

  onSaleAmountCalculated(multipliedAmount: number) {
    this.multipliedAmount = multipliedAmount;
  }

  onSubmittedAmountChanged(submittedAmount: number) {
    this.submittedAmountNumber = submittedAmount;
  }
  updateSubmittedAmountNumber(submittedAmountNumber: number) {
    this.submittedAmountNumber = submittedAmountNumber;
    console.log('Updated submittedAmountNumber:', this.submittedAmountNumber);
  }

  updateMultipliedAmount(multipliedAmount: number) {
    this.multipliedAmount = multipliedAmount;
    console.log('Updated multipliedAmount:', this.multipliedAmount);
  }

  onFilingTypeChange(selectedFilingType: string) {
    this.selectedFilingTypeFromChild = selectedFilingType;
    console.log('selected Filing Type From Child:', this.selectedFilingTypeFromChild);
  }

  onMonthSelected(month: string) {
    this.selectedMonthFromChild = month;
    console.log('Selected month from child:', month);
  }
  onYearSelected(year: string) {
    this.selectedYearFromChild = year;
    console.log('Selected year from child:', year);
  }
  // onTaxAmountSelected(taxAmount: number) {
  //   this.selectedTaxAmountFromChild = taxAmount;
  // }
  
  onSubmit() {
    // console.log('Submit button clicked');
    console.log('Filing:', this.selectedFilingTypeFromChild);
    console.log('Month:', this.selectedMonthFromChild);
    console.log('Year:', this.selectedYearFromChild);
    console.log('Submitted Amount Number:', this.submittedAmountNumber);
    console.log('Multiplied Amount:', this.multipliedAmount);
    
  }
}
