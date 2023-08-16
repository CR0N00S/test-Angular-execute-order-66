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
  enteredAmount: string = '';
  submittedAmount: string = '';
  submittedAmountNumber: number = 0;

  formatInput() {
    // Remove non-numeric and non-decimal characters
    const cleanInput = this.enteredAmount.replace(/[^0-9.]/g, '');

    // Format the input without commas
    this.enteredAmount = cleanInput.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  submitAmount() {
    // Remove commas and convert to a numeric value
    const cleanedValue = this.enteredAmount.replace(/,/g, '');
    this.submittedAmount = parseFloat(cleanedValue).toFixed(2);
    this.submittedAmountNumber = parseFloat(this.submittedAmount);
  }
}
