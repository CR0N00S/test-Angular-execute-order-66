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
  submittedAmountNumber: number = 0;
  multipliedAmount: number = 0;

  @Output() saleAmountCalculated: EventEmitter<number> = new EventEmitter<number>();
  @Output() submittedAmountChanged: EventEmitter<number> = new EventEmitter<number>();

  updateAmount(newValue: string) {
    // Remove non-numeric characters except decimal point and update the input value
    const numericInput = newValue.replace(/[^0-9.]/g, '');

    // Format the numeric input with commas
    const formattedInput = this.formatWithCommas(numericInput);

    this.enteredAmount = formattedInput;

    // Update the model value
    this.submittedAmountNumber = parseFloat(numericInput);

    // Update the multipliedAmount value
    this.multipliedAmount = Math.round(this.submittedAmountNumber * 0.07 * 100) / 100;

    this.saleAmountCalculated.emit(this.multipliedAmount);
    this.submittedAmountChanged.emit(this.submittedAmountNumber);
  }

  formatWithCommas(value: string): string {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}





