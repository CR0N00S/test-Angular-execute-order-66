import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // selectedTaxAmount: string = ''; // Initialize to empty string

  // @Output() taxAmountSelected = new EventEmitter<number>();

  // onTaxAmountSelect() {
  //   // Convert the formatted string to a number before emitting
  //   this.taxAmountSelected.emit(parseFloat(this.selectedTaxAmount.replace(/,/g, '')));
  // }

  // formatTaxAmount() {
  //   // Remove existing commas and add commas for thousands separator
  //   this.selectedTaxAmount = this.selectedTaxAmount.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  //   // Remove leading zeros
  //   this.selectedTaxAmount = this.selectedTaxAmount.replace(/^0+/g, '');
  // }
  @Input() multipliedAmount: number = 0;

  get formattedAmount(): string {
    return this.formatWithCommasAndDecimal(this.multipliedAmount);
  }

  formatWithCommasAndDecimal(value: number): string {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}
