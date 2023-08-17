import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumericInput]'
})
export class NumericInputDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const inputElement = this.el.nativeElement;
    const initialValue = inputElement.value;

    // Remove non-numeric characters except decimal point
    const numericValue = initialValue.replace(/[^0-9.]/g, '');

    // Remove multiple dots and limit decimal places to 2
    const parts = numericValue.split('.');
    if (parts.length > 2) {
      parts.pop();
    }
    const formattedValue = parts.join('.').replace(/(\.\d{2})\d+/, '$1');

    // Format the numeric input with commas
    const formattedWithCommas = this.formatWithCommas(formattedValue);

    inputElement.value = formattedWithCommas;

    if (initialValue !== formattedWithCommas) {
      event.stopPropagation();
    }
  }

  formatWithCommas(value: string): string {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}