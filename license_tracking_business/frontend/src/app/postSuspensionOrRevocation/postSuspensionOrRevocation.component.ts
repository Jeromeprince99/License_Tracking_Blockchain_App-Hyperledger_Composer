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
import { postSuspensionOrRevocationService } from './postSuspensionOrRevocation.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-postsuspensionorrevocation',
  templateUrl: './postSuspensionOrRevocation.component.html',
  styleUrls: ['./postSuspensionOrRevocation.component.css'],
  providers: [postSuspensionOrRevocationService]
})
export class postSuspensionOrRevocationComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  executor = new FormControl('', Validators.required);
  condition = new FormControl('', Validators.required);
  punishmentType = new FormControl('', Validators.required);
  NoOfDaysSuspended = new FormControl('', Validators.required);
  TimeOfSuspensionAndRevocation = new FormControl('', Validators.required);
  LicenseId = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private servicepostSuspensionOrRevocation: postSuspensionOrRevocationService, fb: FormBuilder) {
    this.myForm = fb.group({
      executor: this.executor,
      condition: this.condition,
      punishmentType: this.punishmentType,
      NoOfDaysSuspended: this.NoOfDaysSuspended,
      TimeOfSuspensionAndRevocation: this.TimeOfSuspensionAndRevocation,
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
    return this.servicepostSuspensionOrRevocation.getAll()
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
      $class: 'org1.example.com.model.postSuspensionOrRevocation',
      'executor': this.executor.value,
      'condition': this.condition.value,
      'punishmentType': this.punishmentType.value,
      'NoOfDaysSuspended': this.NoOfDaysSuspended.value,
      'TimeOfSuspensionAndRevocation': this.TimeOfSuspensionAndRevocation.value,
      'LicenseId': this.LicenseId.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'executor': null,
      'condition': null,
      'punishmentType': null,
      'NoOfDaysSuspended': null,
      'TimeOfSuspensionAndRevocation': null,
      'LicenseId': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.servicepostSuspensionOrRevocation.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'executor': null,
        'condition': null,
        'punishmentType': null,
        'NoOfDaysSuspended': null,
        'TimeOfSuspensionAndRevocation': null,
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
      $class: 'org1.example.com.model.postSuspensionOrRevocation',
      'executor': this.executor.value,
      'condition': this.condition.value,
      'punishmentType': this.punishmentType.value,
      'NoOfDaysSuspended': this.NoOfDaysSuspended.value,
      'TimeOfSuspensionAndRevocation': this.TimeOfSuspensionAndRevocation.value,
      'LicenseId': this.LicenseId.value,
      'timestamp': this.timestamp.value
    };

    return this.servicepostSuspensionOrRevocation.updateTransaction(form.get('transactionId').value, this.Transaction)
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

    return this.servicepostSuspensionOrRevocation.deleteTransaction(this.currentId)
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

    return this.servicepostSuspensionOrRevocation.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'executor': null,
        'condition': null,
        'punishmentType': null,
        'NoOfDaysSuspended': null,
        'TimeOfSuspensionAndRevocation': null,
        'LicenseId': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.executor) {
        formObject.executor = result.executor;
      } else {
        formObject.executor = null;
      }

      if (result.condition) {
        formObject.condition = result.condition;
      } else {
        formObject.condition = null;
      }

      if (result.punishmentType) {
        formObject.punishmentType = result.punishmentType;
      } else {
        formObject.punishmentType = null;
      }

      if (result.NoOfDaysSuspended) {
        formObject.NoOfDaysSuspended = result.NoOfDaysSuspended;
      } else {
        formObject.NoOfDaysSuspended = null;
      }

      if (result.TimeOfSuspensionAndRevocation) {
        formObject.TimeOfSuspensionAndRevocation = result.TimeOfSuspensionAndRevocation;
      } else {
        formObject.TimeOfSuspensionAndRevocation = null;
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
      'executor': null,
      'condition': null,
      'punishmentType': null,
      'NoOfDaysSuspended': null,
      'TimeOfSuspensionAndRevocation': null,
      'LicenseId': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
