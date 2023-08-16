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



@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    MyHeaderComponent,
    CompTwoComponent,
    FilingTypeComponent
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
