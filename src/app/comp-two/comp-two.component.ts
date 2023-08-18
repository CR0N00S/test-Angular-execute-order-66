import { Component, OnInit } from '@angular/core';
import { taxData } from '../tax-data.interface';
import { DataSharingService } from '../service/data-sharing.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  storedTaxData: taxData | null = null;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.dataSharingService.taxData$.subscribe(data => {
            this.storedTaxData = data[data.length - 1];
        });
  }

  formatWithCommasAndDecimal(value: number): string {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
  
confirmAndLog() {
  const confirmation = confirm('Are you sure?');
  if (confirmation) {
      const a = JSON.stringify(this.storedTaxData);
      console.log(a);
      alert(a);
  }
}
}
