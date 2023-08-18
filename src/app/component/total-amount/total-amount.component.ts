import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() penaltySend: number = 0;
  @Input() multipliedAmount: number = 0;
  @Input() surSend: number = 0;
  @Output() totalAmount: EventEmitter<number> = new EventEmitter<number>();
  total() {
    const temp: number = this.penaltySend + this.multipliedAmount + this.surSend;
    this.totalAmount.emit(temp);
    return this.formatWithCommasAndDecimal(temp);
  }
  formatWithCommasAndDecimal(value: number): string {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  
}
