import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {
  name: string = '';
  isHidden: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  hideInputAndImage() {
    this.isHidden = !this.isHidden;

  }

}
