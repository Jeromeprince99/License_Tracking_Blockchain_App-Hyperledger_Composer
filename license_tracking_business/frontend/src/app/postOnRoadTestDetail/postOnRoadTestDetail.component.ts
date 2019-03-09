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
import { postOnRoadTestDetailService } from './postOnRoadTestDetail.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-postonroadtestdetail',
  templateUrl: './postOnRoadTestDetail.component.html',
  styleUrls: ['./postOnRoadTestDetail.component.css'],
  providers: [postOnRoadTestDetailService]
})
export class postOnRoadTestDetailComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
  private errorMessage;

  org = new FormControl('', Validators.required);
  test3_perf = new FormControl('', Validators.required);
  test3_score = new FormControl('', Validators.required);
  test3_res = new FormControl('', Validators.required);
  LicenseId = new FormControl('', Validators.required);
  transactionId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);


  constructor(private servicepostOnRoadTestDetail: postOnRoadTestDetailService, fb: FormBuilder) {
    this.myForm = fb.group({
      org: this.org,
      test3_perf: this.test3_perf,
      test3_score: this.test3_score,
      test3_res: this.test3_res,
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
    return this.servicepostOnRoadTestDetail.getAll()
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
      $class: 'org1.example.com.model.postOnRoadTestDetail',
      'org': this.org.value,
      'test3_perf': this.test3_perf.value,
      'test3_score': this.test3_score.value,
      'test3_res': this.test3_res.value,
      'LicenseId': this.LicenseId.value,
      'transactionId': this.transactionId.value,
      'timestamp': this.timestamp.value
    };

    this.myForm.setValue({
      'org': null,
      'test3_perf': null,
      'test3_score': null,
      'test3_res': null,
      'LicenseId': null,
      'transactionId': null,
      'timestamp': null
    });

    return this.servicepostOnRoadTestDetail.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'org': null,
        'test3_perf': null,
        'test3_score': null,
        'test3_res': null,
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
      $class: 'org1.example.com.model.postOnRoadTestDetail',
      'org': this.org.value,
      'test3_perf': this.test3_perf.value,
      'test3_score': this.test3_score.value,
      'test3_res': this.test3_res.value,
      'LicenseId': this.LicenseId.value,
      'timestamp': this.timestamp.value
    };

    return this.servicepostOnRoadTestDetail.updateTransaction(form.get('transactionId').value, this.Transaction)
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

    return this.servicepostOnRoadTestDetail.deleteTransaction(this.currentId)
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

    return this.servicepostOnRoadTestDetail.getTransaction(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'org': null,
        'test3_perf': null,
        'test3_score': null,
        'test3_res': null,
        'LicenseId': null,
        'transactionId': null,
        'timestamp': null
      };

      if (result.org) {
        formObject.org = result.org;
      } else {
        formObject.org = null;
      }

      if (result.test3_perf) {
        formObject.test3_perf = result.test3_perf;
      } else {
        formObject.test3_perf = null;
      }

      if (result.test3_score) {
        formObject.test3_score = result.test3_score;
      } else {
        formObject.test3_score = null;
      }

      if (result.test3_res) {
        formObject.test3_res = result.test3_res;
      } else {
        formObject.test3_res = null;
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
      'org': null,
      'test3_perf': null,
      'test3_score': null,
      'test3_res': null,
      'LicenseId': null,
      'transactionId': null,
      'timestamp': null
    });
  }
}
