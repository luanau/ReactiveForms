import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Customer } from './customer';

@Component({
    selector: 'my-signup',
    templateUrl: './app/customers/customer.component.html'
})
export class CustomerComponent  implements OnInit {
    customerForm: FormGroup;
    customer: Customer= new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.customerForm = this.fb.group({
            firstName : '',
            lastName : '',
            email : '',
            sendCatalog : true,
            counter: 10
        });
    }

    save() {
        console.log(this.customerForm.value);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
 }
