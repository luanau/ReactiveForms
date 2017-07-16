import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
};

@Component({
    selector: 'custom-input',
    templateUrl: '../../../app/components/custom-input/custom-input.component.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CustomInputComponent implements ControlValueAccessor {

    //The internal data model
    private savedValue: any = '';
    private innerValue: any = '';
    private isReadOnly: boolean = true;
    

    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    ngOnInit() {
        this.savedValue = this.value;
    }

    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    changeMode = () =>  this.isReadOnly = false;

    save = () => {
        this.savedValue = this.value;
        this.isReadOnly = true;
    }

    cancel = () => {
        this.value = this.savedValue;
        this.isReadOnly = true;
    }

    //ControlValueAccessor Interface methods below
    //Set touched on blur
    // onBlur() {
    //     this.onTouchedCallback();
    // }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.value = value;
            this.savedValue = this.value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

}
