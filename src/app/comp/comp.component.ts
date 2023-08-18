import { Component, OnInit } from '@angular/core';
import { taxData } from '../tax-data.interface';
import { DataSharingService } from '../service/data-sharing.service';
import { Router } from '@angular/router';
// interface taxData {
//   filingType:string;
//   month:string;
//   year:string;
//   saleAmount:Number;
//   taxAmount:Number;
// }

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})


export class CompComponent implements OnInit {
  name: string = '';
  isHidden: boolean = false;
  storedToTaxData: taxData[] = [];
  
  constructor(  
    private dataSharingService: DataSharingService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  hideInputAndImage() {
    this.isHidden = !this.isHidden;

  }
  input1: number = 0;
  input2: number = 0;
  input3: number = 0;
  isDisabled: boolean = true; // Initially disable the inputs

  toggleInputs() {
    this.isDisabled = !this.isDisabled;
  }

  selectedMonthFromChild: string = '';
  selectedYearFromChild: string = new Date().getFullYear().toString();
  // selectedSaleAmountFromChild: number = 0;
  selectedFilingTypeFromChild: string = '0'; // Initialize with default value
  // submittedAmountNumber: number = 0;
  // submittedAmountNumber: number = 0;
  submittedAmountNumber: number = 0;
  multipliedAmount: number = 0;
  penalty: number = 0;

  penaltyValue(penaltyAmount : number){
    this.penalty = penaltyAmount;
  }

  onSaleAmountCalculated(multipliedAmount: number) {
    this.multipliedAmount = multipliedAmount;
  }

  onSubmittedAmountChanged(submittedAmount: number) {
    this.submittedAmountNumber = submittedAmount;
  }
  updateSubmittedAmountNumber(submittedAmountNumber: number) {
    this.submittedAmountNumber = submittedAmountNumber;
    console.log('Updated submittedAmountNumber:', this.submittedAmountNumber);
  }

  updateMultipliedAmount(multipliedAmount: number) {
    this.multipliedAmount = multipliedAmount;
    console.log('Updated multipliedAmount:', this.multipliedAmount);
  }

  onFilingTypeChange(selectedFilingType: string) {
    this.selectedFilingTypeFromChild = selectedFilingType;
    console.log('selected Filing Type From Child:', this.selectedFilingTypeFromChild);
  }

  onMonthSelected(month: string) {
    this.selectedMonthFromChild = month;
    console.log('Selected month from child:', month);
  }
  onYearSelected(year: string) {
    this.selectedYearFromChild = year;
    console.log('Selected year from child:', year);
  }
  // onTaxAmountSelected(taxAmount: number) {
  //   this.selectedTaxAmountFromChild = taxAmount;
  // }
  
  onSubmit() {
    console.log('Filing:', this.selectedFilingTypeFromChild);
    console.log('Month:', this.selectedMonthFromChild);
    console.log('Year:', this.selectedYearFromChild);
    console.log('Submitted Amount Number:', this.submittedAmountNumber);
    console.log('Multiplied Amount:', this.multipliedAmount);
    if (this.selectedMonthFromChild==='' || this.submittedAmountNumber === 0 ){
      
      console.log('got =',this.selectedMonthFromChild)
      alert('Invalid Data');
    }else{
      console.log("Ok pass")
      var temp_month = this.selectedMonthFromChild;
      console.log(temp_month)
      const sendData:taxData = {
        filingType : this.selectedFilingTypeFromChild,
        month : temp_month,
        year : this.selectedYearFromChild,
        saleAmount : this.submittedAmountNumber,
        taxAmount : this.multipliedAmount
      }
      console.log(sendData);
      this.storedToTaxData.push(sendData);
      console.log(this.storedToTaxData)
      this.dataSharingService.addTaxData(sendData);
      this.resetForm();
      this.router.navigate(['/pagetwo']);
    }
    
  }

  resetForm() {
    this.selectedFilingTypeFromChild = '0';
    this.selectedMonthFromChild = '';
    this.selectedYearFromChild = '';
    this.submittedAmountNumber = 0;
    this.multipliedAmount = 0;
  }
}
