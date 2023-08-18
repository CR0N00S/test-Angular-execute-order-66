import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  selectedYear: string = ''; 
  years: string[] = [];
  @Output() yearSelected = new EventEmitter<string>();

  constructor() {
    const currentYear = new Date().getFullYear();
    const startYear = 2020;

    for (let year = startYear; year <= currentYear; year++) {
      this.years.push(year.toString());
    }
  }

  ngOnInit(): void {
  }

  onYearSelect() {
    this.yearSelected.emit(this.selectedYear);
  }
}
