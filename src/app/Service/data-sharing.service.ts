import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { taxData } from '../tax-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private taxDataSubject = new BehaviorSubject<taxData[]>([]);
  taxData$ = this.taxDataSubject.asObservable();

  addTaxData(data: taxData) {
    const currentData = this.taxDataSubject.getValue();
    const updatedData = [...currentData, data];
    this.taxDataSubject.next(updatedData);
  }
}