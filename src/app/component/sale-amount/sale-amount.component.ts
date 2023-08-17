import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
//   enteredAmount: string = '';
//   submittedAmountNumber: number = 0;
//   multipliedAmount: number = 0;

//   formatInput() {
//     // Remove non-numeric and non-decimal characters
//     const cleanInput = this.enteredAmount.replace(/[^0-9.]/g, '');

//     // Format the input without commas
//     this.enteredAmount = cleanInput.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   }

//   submitAmount() {
//     // Remove commas and convert to a numeric value
//     const cleanedValue = this.enteredAmount.replace(/,/g, '');
//     this.submittedAmountNumber = parseFloat(cleanedValue);
    
//     // Perform multiplication
//     this.multipliedAmount = this.submittedAmountNumber * 0.07;

//     // Format multiplied amount with commas for display
//     this.multipliedAmount = parseFloat(this.multipliedAmount.toFixed(2));
//   }
enteredAmount: string = '';
submittedAmountNumber: number = 0;
multipliedAmount: number = 0;

handleInput(event: any) {
  // Remove non-numeric characters except decimal point and update the input value
  const numericInput = event.target.value.replace(/[^0-9.]/g, '');
  
  // Format the numeric input with commas
  const formattedInput = this.formatWithCommas(numericInput);

  this.enteredAmount = formattedInput;

  // Update the model value
  this.submittedAmountNumber = parseFloat(numericInput);
}

formatWithCommas(value: string): string {
  const parts = value.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

submitAmount() {
      // Remove commas and convert to a numeric value
      const cleanedValue = this.enteredAmount.replace(/,/g, '');
    this.submittedAmountNumber = parseFloat(cleanedValue);

    // Format submittedAmountNumber with commas and two decimal places
    this.submittedAmountNumber = parseFloat((this.submittedAmountNumber).toFixed(2));

    // Perform multiplication (using the formatted submittedAmountNumber)
    this.multipliedAmount = this.submittedAmountNumber * 0.07;

    // Format multiplied amount with commas for display
    this.multipliedAmount = parseFloat(this.multipliedAmount.toFixed(2));
  }
}





