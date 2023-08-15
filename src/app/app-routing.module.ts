import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

const routes: Routes = [
  {path:'' , component:CompComponent},
  {path:'pagetwo' , component:CompTwoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
