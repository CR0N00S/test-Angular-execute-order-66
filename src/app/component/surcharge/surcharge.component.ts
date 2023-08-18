import { Component, Input, OnInit } from '@angular/core';

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

  get formattedAmount(): string {
    
    return this.formatWithCommasAndDecimal(Math.round(this.multipliedAmount * 0.1 * 100) / 100);
  }

  formatWithCommasAndDecimal(value: number): string {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}
