/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { applyForUpdateLicenseService } from './applyForUpdateLicense.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-applyforupdatelicense',
  templateUrl: './applyForUpdateLicense.component.html',
  styleUrls: ['./applyForUpdateLicense.component.css'],
  providers: [applyForUpdateLicenseService]
})
export class applyForUpdateLicenseComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  LH = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  MobileNumber = new FormControl('', Validators.required);
  State = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  street = new FormControl('', Validators.required);
  doorno = new FormControl('', Validators.required);
  Zipcode = new FormControl('', Validators.required);
  LicenseId = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private serviceapplyForUpdateLicense: applyForUpdateLicenseService, fb: FormBuilder) {
    this.myForm = fb.group({
      LH: this.LH,
      name: this.name,
      MobileNumber: this.MobileNumber,
      State: this.State,
      city: this.city,
      street: this.street,
      doorno: this.doorno,
      Zipcode: this.Zipcode,
      LicenseId: this.LicenseId,
      transactionId: this.transactionId,
      timestamp: this.timestamp
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceapplyForUpdateLicense.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'org1.example.com.model.applyForUpdateLicense',
      'LH': this.LH.value,
      'name': this.name.value,
      'MobileNumber': this.MobileNumber.value,
      'State': this.State.value,
      'city': this.city.value,
      'street': this.street.value,
      'doorno': this.doorno.value,
      'Zipcode': this.Zipcode.value,
      'LicenseId': this.LicenseId.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'LH': null,
      'name': null,
      'MobileNumber': null,
      'State': null,
      'city': null,
      'street': null,
      'doorno': null,
      'Zipcode': null,
      'LicenseId': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.serviceapplyForUpdateLicense.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'LH': null,
        'name': null,
        'MobileNumber': null,
        'State': null,
        'city': null,
        'street': null,
        'doorno': null,
        'Zipcode': null,
        'LicenseId': null,
        'transactionId': null,
        'timestamp': null
      });
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
        this.errorMessage = error;
      }
    });
  }

  updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: 'org1.example.com.model.applyForUpdateLicense',
      'LH': this.LH.value,
      'name': this.name.value,
      'MobileNumber': this.MobileNumber.value,
      'State': this.State.value,
      'city': this.city.value,
      'street': this.street.value,
      'doorno': this.doorno.value,
      'Zipcode': this.Zipcode.value,
      'LicenseId': this.LicenseId.value,
      'timestamp': this.timestamp.value
    };

    return this.serviceapplyForUpdateLicense.updateTransaction(form.get('transactionId').value, this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
      this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  deleteTransaction(): Promise<any> {

    return this.serviceapplyForUpdateLicense.deleteTransaction(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceapplyForUpdateLicense.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'LH': null,
        'name': null,
        'MobileNumber': null,
        'State': null,
        'city': null,
        'street': null,
        'doorno': null,
        'Zipcode': null,
        'LicenseId': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.LH) {
        formObject.LH = result.LH;
      } else {
        formObject.LH = null;
      }

      if (result.name) {
        formObject.name = result.name;
      } else {
        formObject.name = null;
      }

      if (result.MobileNumber) {
        formObject.MobileNumber = result.MobileNumber;
      } else {
        formObject.MobileNumber = null;
      }

      if (result.State) {
        formObject.State = result.State;
      } else {
        formObject.State = null;
      }

      if (result.city) {
        formObject.city = result.city;
      } else {
        formObject.city = null;
      }

      if (result.street) {
        formObject.street = result.street;
      } else {
        formObject.street = null;
      }

      if (result.doorno) {
        formObject.doorno = result.doorno;
      } else {
        formObject.doorno = null;
      }

      if (result.Zipcode) {
        formObject.Zipcode = result.Zipcode;
      } else {
        formObject.Zipcode = null;
      }

      if (result.LicenseId) {
        formObject.LicenseId = result.LicenseId;
      } else {
        formObject.LicenseId = null;
      }

      if (result.transactionId) {
        formObject.transactionId = result.transactionId;
      } else {
        formObject.transactionId = null;
      }

      if (result.timestamp) {
        formObject.timestamp = result.timestamp;
      } else {
        formObject.timestamp = null;
      }

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
      this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
      } else {
        this.errorMessage = error;
      }
    });
  }

  resetForm(): void {
    this.myForm.setValue({
      'LH': null,
      'name': null,
      'MobileNumber': null,
      'State': null,
      'city': null,
      'street': null,
      'doorno': null,
      'Zipcode': null,
      'LicenseId': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
