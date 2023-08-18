import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  @Input() multipliedAmount: number = 0;

  get formattedAmount(): string {
    return this.formatWithCommasAndDecimal(this.multipliedAmount);
  }

  formatWithCommasAndDecimal(value: number): string {
    if (isNaN(value)) {
      return '0';
    }
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}
