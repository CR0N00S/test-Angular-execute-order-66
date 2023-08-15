import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  constructor() { }
  currentTime: Date = new Date();

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // Update every 1000ms (1 second)
  }


}
