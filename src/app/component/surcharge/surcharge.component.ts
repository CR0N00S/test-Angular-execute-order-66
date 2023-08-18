import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() multipliedAmount: number = 0;
  // @Output() surAmount:number = 0
  @Output() surAmount: EventEmitter<number> = new EventEmitter<number>();
  get formattedAmount(): string {
    const calculatedValue = Math.round(this.multipliedAmount * 0.1 * 100) / 100;
    this.surAmount.emit(calculatedValue);
    return this.formatWithCommasAndDecimal(calculatedValue);
  }

  formatWithCommasAndDecimal(value: number): string {
    if (isNaN(value)) {
      return '0';
    }
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}
