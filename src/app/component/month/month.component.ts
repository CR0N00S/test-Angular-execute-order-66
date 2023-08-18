import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  months: { name: string, disabled: boolean }[] = [];

  selectedMonth: string = '';

  @Output() monthSelected = new EventEmitter<string>();
  constructor() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const allMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    this.months = allMonths.map((month, index) => ({
      name: month,
      disabled: index < currentMonth // Disable months before current month
    }));
  }

    ngOnInit(): void {
    } 

    onMonthSelect() {
      this.monthSelected.emit(this.selectedMonth);
    }

  }
