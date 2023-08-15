import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './comp/comp.component';

const routes: Routes = [
  {path:'' , component:CompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
