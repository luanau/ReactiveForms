import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';

@Component({
    providers: [
        { 
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CounterInputComponent),
        multi: true
        }
    ],
    selector: 'counter-input',
    template: `
        <button (click)="increment()">+</button>
        {{counterValue}}
        <button (click)="decrement()">-</button>
    `
})
export class CounterInputComponent implements ControlValueAccessor {

    @Input() _counterValue = 0; // notice the '_'

    propagateChange = (_: any) => {};

    get counterValue() {
        return this._counterValue;
    }

    set counterValue(val) {
        this._counterValue = val;
        this.propagateChange(this._counterValue);
    }

    increment() {
        this.counterValue++;
    }

    decrement() {
        this.counterValue--;
    }

    writeValue(value: any): void {
        if (value !== undefined) {
            this.counterValue = value;
        }
    }
    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void {}

    setDisabledState(isDisabled: boolean): void {
        throw new Error("Method not implemented.");
    }
}