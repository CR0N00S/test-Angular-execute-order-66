import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './comp/comp.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { FilingTypeComponent } from './component/filing-type/filing-type.component';
import { MonthComponent } from './component/month/month.component';
import { YearComponent } from './component/year/year.component';
import { TaxAmountComponent } from './component/tax-amount/tax-amount.component';
import { SaleAmountComponent } from './component/sale-amount/sale-amount.component';
import { NumericInputDirective } from './component/numeric-input.directive';
import { SurchargeComponent } from './component/surcharge/surcharge.component';





@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    MyHeaderComponent,
    CompTwoComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    TaxAmountComponent,
    SaleAmountComponent,
    NumericInputDirective,
    SurchargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
