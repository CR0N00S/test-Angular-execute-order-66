import { Component, OnInit } from '@angular/core';
import { taxData } from '../tax-data.interface';
import { DataSharingService } from '../service/data-sharing.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})


export class CompComponent implements OnInit {

  
  constructor(  
    private dataSharingService: DataSharingService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  
  storedToTaxData: taxData[] = [];
  selectedMonthFromChild: string = '';
  selectedYearFromChild: string = new Date().getFullYear().toString();
  selectedFilingTypeFromChild: string = '0'; 
  submittedAmountNumber: number = 0;
  multipliedAmount: number = 0;
  penalty: number = 0;
  sur:number = 0 ;
  total:number = 0;
  
  totalValue(temp:number){
    this.total = temp;
  }
  surValue(surva: number){
    this.sur = surva;
  }

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
  
  onSubmit() {
    console.log('Filing:', this.selectedFilingTypeFromChild);
    console.log('Month:', this.selectedMonthFromChild);
    console.log('Year:', this.selectedYearFromChild);
    console.log('Submitted Amount Number:', this.submittedAmountNumber);
    console.log('Multiplied Amount:', this.multipliedAmount);
    console.log('penalty Amount:', this.penalty);
    console.log('sur Amount:', this.sur);
    console.log('total Amount:', this.total);
    const Upper: number = this.multipliedAmount + 20;
    const Lower: number = this.multipliedAmount - 20;
    console.log('Multiplied Amount Upper :', Upper);
    console.log('Multiplied Amount Lower:', Lower);
    if(this.selectedFilingTypeFromChild === '0'){
      if (this.selectedMonthFromChild==='' || this.submittedAmountNumber === 0 
      || this.multipliedAmount > Upper || this.multipliedAmount < Lower
      ){
        // console.log('got =',this.selectedMonthFromChild)
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
          taxAmount : this.multipliedAmount,
          surcharge :0,
          penalty:0,
          totalAmount:0
        }
        console.log(sendData);
        this.storedToTaxData.push(sendData);
        console.log(this.storedToTaxData)
        this.dataSharingService.addTaxData(sendData);
        this.resetForm();
        this.router.navigate(['/pagetwo']);
      }

    }else if(this.selectedFilingTypeFromChild === '1'){

      console.log('it ' ,this.selectedFilingTypeFromChild,' now')

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
          taxAmount : this.multipliedAmount,
          surcharge :this.sur,
          penalty:this.penalty,
          totalAmount:this.total
        }
        console.log(sendData);
        this.storedToTaxData.push(sendData);
        console.log(this.storedToTaxData)
        this.dataSharingService.addTaxData(sendData);
        this.resetForm();
        this.router.navigate(['/pagetwo']);
      }

    }else{
      alert('Somethig error');
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
