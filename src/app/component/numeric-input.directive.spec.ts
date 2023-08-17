import { NumericInputDirective } from './numeric-input.directive';
import { ElementRef } from '@angular/core';

describe('NumericInputDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = { nativeElement: {} as HTMLInputElement };
    const directive = new NumericInputDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});