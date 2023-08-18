import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    this.penaltySent.emit(this.penalty);
  }
  @Output() penaltySent = new EventEmitter<number>();
  penalty: number = 200;
}
