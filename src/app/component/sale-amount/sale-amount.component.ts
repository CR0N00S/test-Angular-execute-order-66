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

  handleInput(event: any) {
    // Remove non-numeric characters and update the input value
    const numericInput = event.target.value.replace(/[^0-9]/g, '');
    this.enteredAmount = numericInput;

    // Format the input value with commas
    this.enteredAmount = this.formatWithCommas(this.enteredAmount);

    // Update the model value
    this.submittedAmountNumber = parseInt(numericInput, 10);
  }

  formatWithCommas(value: string): string {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  submitAmount() {
    // Convert the entered amount to a number
    this.submittedAmountNumber = parseInt(this.enteredAmount.replace(/,/g, ''), 10);
  }
}



