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
import { LicenseService } from './License.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-license',
  templateUrl: './License.component.html',
  styleUrls: ['./License.component.css'],
  providers: [LicenseService]
})
export class LicenseComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  LicenseId = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  MobileNumber = new FormControl('', Validators.required);
  BloodGroup = new FormControl('', Validators.required);
  gender = new FormControl('', Validators.required);
  DateofBirth = new FormControl('', Validators.required);
  Nationality = new FormControl('', Validators.required);
  State = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  street = new FormControl('', Validators.required);
  doorno = new FormControl('', Validators.required);
  Zipcode = new FormControl('', Validators.required);
  Type = new FormControl('', Validators.required);
  ExpiryDate = new FormControl('', Validators.required);
  IsApplicationAccepted = new FormControl('', Validators.required);
  IsLicenseUpdated = new FormControl('', Validators.required);
  IsLicenseRenewed = new FormControl('', Validators.required);
  DocType = new FormControl('', Validators.required);
  DocId = new FormControl('', Validators.required);
  ApplicationFeePaid = new FormControl('', Validators.required);
  Used = new FormControl('', Validators.required);
  test1_perf = new FormControl('', Validators.required);
  test1_score = new FormControl('', Validators.required);
  test1_res = new FormControl('', Validators.required);
  test2_perf = new FormControl('', Validators.required);
  test2_score = new FormControl('', Validators.required);
  test2_res = new FormControl('', Validators.required);
  test3_perf = new FormControl('', Validators.required);
  test3_score = new FormControl('', Validators.required);
  test3_res = new FormControl('', Validators.required);
  LicenseIssuedTimeStamp = new FormControl('', Validators.required);
  LicenseUpdatedTime = new FormControl('', Validators.required);
  timeOfFilingTheCase = new FormControl('', Validators.required);
  caseType = new FormControl('', Validators.required);
  condition = new FormControl('', Validators.required);
  punishmentType = new FormControl('', Validators.required);
  NoOfDaysSuspended = new FormControl('', Validators.required);
  TimeOfSuspensionAndRevocation = new FormControl('', Validators.required);
  LH = new FormControl('', Validators.required);

  constructor(public serviceLicense: LicenseService, fb: FormBuilder) {
    this.myForm = fb.group({
      LicenseId: this.LicenseId,
      name: this.name,
      MobileNumber: this.MobileNumber,
      BloodGroup: this.BloodGroup,
      gender: this.gender,
      DateofBirth: this.DateofBirth,
      Nationality: this.Nationality,
      State: this.State,
      city: this.city,
      street: this.street,
      doorno: this.doorno,
      Zipcode: this.Zipcode,
      Type: this.Type,
      ExpiryDate: this.ExpiryDate,
      IsApplicationAccepted: this.IsApplicationAccepted,
      IsLicenseUpdated: this.IsLicenseUpdated,
      IsLicenseRenewed: this.IsLicenseRenewed,
      DocType: this.DocType,
      DocId: this.DocId,
      ApplicationFeePaid: this.ApplicationFeePaid,
      Used: this.Used,
      test1_perf: this.test1_perf,
      test1_score: this.test1_score,
      test1_res: this.test1_res,
      test2_perf: this.test2_perf,
      test2_score: this.test2_score,
      test2_res: this.test2_res,
      test3_perf: this.test3_perf,
      test3_score: this.test3_score,
      test3_res: this.test3_res,
      LicenseIssuedTimeStamp: this.LicenseIssuedTimeStamp,
      LicenseUpdatedTime: this.LicenseUpdatedTime,
      timeOfFilingTheCase: this.timeOfFilingTheCase,
      caseType: this.caseType,
      condition: this.condition,
      punishmentType: this.punishmentType,
      NoOfDaysSuspended: this.NoOfDaysSuspended,
      TimeOfSuspensionAndRevocation: this.TimeOfSuspensionAndRevocation,
      LH: this.LH
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceLicense.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
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
   * @param {String} name - the name of the asset field to update
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
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org1.example.com.model.License',
      'LicenseId': this.LicenseId.value,
      'name': this.name.value,
      'MobileNumber': this.MobileNumber.value,
      'BloodGroup': this.BloodGroup.value,
      'gender': this.gender.value,
      'DateofBirth': this.DateofBirth.value,
      'Nationality': this.Nationality.value,
      'State': this.State.value,
      'city': this.city.value,
      'street': this.street.value,
      'doorno': this.doorno.value,
      'Zipcode': this.Zipcode.value,
      'Type': this.Type.value,
      'ExpiryDate': this.ExpiryDate.value,
      'IsApplicationAccepted': this.IsApplicationAccepted.value,
      'IsLicenseUpdated': this.IsLicenseUpdated.value,
      'IsLicenseRenewed': this.IsLicenseRenewed.value,
      'DocType': this.DocType.value,
      'DocId': this.DocId.value,
      'ApplicationFeePaid': this.ApplicationFeePaid.value,
      'Used': this.Used.value,
      'test1_perf': this.test1_perf.value,
      'test1_score': this.test1_score.value,
      'test1_res': this.test1_res.value,
      'test2_perf': this.test2_perf.value,
      'test2_score': this.test2_score.value,
      'test2_res': this.test2_res.value,
      'test3_perf': this.test3_perf.value,
      'test3_score': this.test3_score.value,
      'test3_res': this.test3_res.value,
      'LicenseIssuedTimeStamp': this.LicenseIssuedTimeStamp.value,
      'LicenseUpdatedTime': this.LicenseUpdatedTime.value,
      'timeOfFilingTheCase': this.timeOfFilingTheCase.value,
      'caseType': this.caseType.value,
      'condition': this.condition.value,
      'punishmentType': this.punishmentType.value,
      'NoOfDaysSuspended': this.NoOfDaysSuspended.value,
      'TimeOfSuspensionAndRevocation': this.TimeOfSuspensionAndRevocation.value,
      'LH': this.LH.value
    };

    this.myForm.setValue({
      'LicenseId': null,
      'name': null,
      'MobileNumber': null,
      'BloodGroup': null,
      'gender': null,
      'DateofBirth': null,
      'Nationality': null,
      'State': null,
      'city': null,
      'street': null,
      'doorno': null,
      'Zipcode': null,
      'Type': null,
      'ExpiryDate': null,
      'IsApplicationAccepted': null,
      'IsLicenseUpdated': null,
      'IsLicenseRenewed': null,
      'DocType': null,
      'DocId': null,
      'ApplicationFeePaid': null,
      'Used': null,
      'test1_perf': null,
      'test1_score': null,
      'test1_res': null,
      'test2_perf': null,
      'test2_score': null,
      'test2_res': null,
      'test3_perf': null,
      'test3_score': null,
      'test3_res': null,
      'LicenseIssuedTimeStamp': null,
      'LicenseUpdatedTime': null,
      'timeOfFilingTheCase': null,
      'caseType': null,
      'condition': null,
      'punishmentType': null,
      'NoOfDaysSuspended': null,
      'TimeOfSuspensionAndRevocation': null,
      'LH': null
    });

    return this.serviceLicense.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'LicenseId': null,
        'name': null,
        'MobileNumber': null,
        'BloodGroup': null,
        'gender': null,
        'DateofBirth': null,
        'Nationality': null,
        'State': null,
        'city': null,
        'street': null,
        'doorno': null,
        'Zipcode': null,
        'Type': null,
        'ExpiryDate': null,
        'IsApplicationAccepted': null,
        'IsLicenseUpdated': null,
        'IsLicenseRenewed': null,
        'DocType': null,
        'DocId': null,
        'ApplicationFeePaid': null,
        'Used': null,
        'test1_perf': null,
        'test1_score': null,
        'test1_res': null,
        'test2_perf': null,
        'test2_score': null,
        'test2_res': null,
        'test3_perf': null,
        'test3_score': null,
        'test3_res': null,
        'LicenseIssuedTimeStamp': null,
        'LicenseUpdatedTime': null,
        'timeOfFilingTheCase': null,
        'caseType': null,
        'condition': null,
        'punishmentType': null,
        'NoOfDaysSuspended': null,
        'TimeOfSuspensionAndRevocation': null,
        'LH': null
      });
      this.loadAll();
    })
    .catch((error) => {
      if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else {
          this.errorMessage = error;
      }
    });
  }


  updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org1.example.com.model.License',
      'name': this.name.value,
      'MobileNumber': this.MobileNumber.value,
      'BloodGroup': this.BloodGroup.value,
      'gender': this.gender.value,
      'DateofBirth': this.DateofBirth.value,
      'Nationality': this.Nationality.value,
      'State': this.State.value,
      'city': this.city.value,
      'street': this.street.value,
      'doorno': this.doorno.value,
      'Zipcode': this.Zipcode.value,
      'Type': this.Type.value,
      'ExpiryDate': this.ExpiryDate.value,
      'IsApplicationAccepted': this.IsApplicationAccepted.value,
      'IsLicenseUpdated': this.IsLicenseUpdated.value,
      'IsLicenseRenewed': this.IsLicenseRenewed.value,
      'DocType': this.DocType.value,
      'DocId': this.DocId.value,
      'ApplicationFeePaid': this.ApplicationFeePaid.value,
      'Used': this.Used.value,
      'test1_perf': this.test1_perf.value,
      'test1_score': this.test1_score.value,
      'test1_res': this.test1_res.value,
      'test2_perf': this.test2_perf.value,
      'test2_score': this.test2_score.value,
      'test2_res': this.test2_res.value,
      'test3_perf': this.test3_perf.value,
      'test3_score': this.test3_score.value,
      'test3_res': this.test3_res.value,
      'LicenseIssuedTimeStamp': this.LicenseIssuedTimeStamp.value,
      'LicenseUpdatedTime': this.LicenseUpdatedTime.value,
      'timeOfFilingTheCase': this.timeOfFilingTheCase.value,
      'caseType': this.caseType.value,
      'condition': this.condition.value,
      'punishmentType': this.punishmentType.value,
      'NoOfDaysSuspended': this.NoOfDaysSuspended.value,
      'TimeOfSuspensionAndRevocation': this.TimeOfSuspensionAndRevocation.value,
      'LH': this.LH.value
    };

    return this.serviceLicense.updateAsset(form.get('LicenseId').value, this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
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


  deleteAsset(): Promise<any> {

    return this.serviceLicense.deleteAsset(this.currentId)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
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

    return this.serviceLicense.getAsset(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'LicenseId': null,
        'name': null,
        'MobileNumber': null,
        'BloodGroup': null,
        'gender': null,
        'DateofBirth': null,
        'Nationality': null,
        'State': null,
        'city': null,
        'street': null,
        'doorno': null,
        'Zipcode': null,
        'Type': null,
        'ExpiryDate': null,
        'IsApplicationAccepted': null,
        'IsLicenseUpdated': null,
        'IsLicenseRenewed': null,
        'DocType': null,
        'DocId': null,
        'ApplicationFeePaid': null,
        'Used': null,
        'test1_perf': null,
        'test1_score': null,
        'test1_res': null,
        'test2_perf': null,
        'test2_score': null,
        'test2_res': null,
        'test3_perf': null,
        'test3_score': null,
        'test3_res': null,
        'LicenseIssuedTimeStamp': null,
        'LicenseUpdatedTime': null,
        'timeOfFilingTheCase': null,
        'caseType': null,
        'condition': null,
        'punishmentType': null,
        'NoOfDaysSuspended': null,
        'TimeOfSuspensionAndRevocation': null,
        'LH': null
      };

      if (result.LicenseId) {
        formObject.LicenseId = result.LicenseId;
      } else {
        formObject.LicenseId = null;
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

      if (result.BloodGroup) {
        formObject.BloodGroup = result.BloodGroup;
      } else {
        formObject.BloodGroup = null;
      }

      if (result.gender) {
        formObject.gender = result.gender;
      } else {
        formObject.gender = null;
      }

      if (result.DateofBirth) {
        formObject.DateofBirth = result.DateofBirth;
      } else {
        formObject.DateofBirth = null;
      }

      if (result.Nationality) {
        formObject.Nationality = result.Nationality;
      } else {
        formObject.Nationality = null;
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

      if (result.Type) {
        formObject.Type = result.Type;
      } else {
        formObject.Type = null;
      }

      if (result.ExpiryDate) {
        formObject.ExpiryDate = result.ExpiryDate;
      } else {
        formObject.ExpiryDate = null;
      }

      if (result.IsApplicationAccepted) {
        formObject.IsApplicationAccepted = result.IsApplicationAccepted;
      } else {
        formObject.IsApplicationAccepted = null;
      }

      if (result.IsLicenseUpdated) {
        formObject.IsLicenseUpdated = result.IsLicenseUpdated;
      } else {
        formObject.IsLicenseUpdated = null;
      }

      if (result.IsLicenseRenewed) {
        formObject.IsLicenseRenewed = result.IsLicenseRenewed;
      } else {
        formObject.IsLicenseRenewed = null;
      }

      if (result.DocType) {
        formObject.DocType = result.DocType;
      } else {
        formObject.DocType = null;
      }

      if (result.DocId) {
        formObject.DocId = result.DocId;
      } else {
        formObject.DocId = null;
      }

      if (result.ApplicationFeePaid) {
        formObject.ApplicationFeePaid = result.ApplicationFeePaid;
      } else {
        formObject.ApplicationFeePaid = null;
      }

      if (result.Used) {
        formObject.Used = result.Used;
      } else {
        formObject.Used = null;
      }

      if (result.test1_perf) {
        formObject.test1_perf = result.test1_perf;
      } else {
        formObject.test1_perf = null;
      }

      if (result.test1_score) {
        formObject.test1_score = result.test1_score;
      } else {
        formObject.test1_score = null;
      }

      if (result.test1_res) {
        formObject.test1_res = result.test1_res;
      } else {
        formObject.test1_res = null;
      }

      if (result.test2_perf) {
        formObject.test2_perf = result.test2_perf;
      } else {
        formObject.test2_perf = null;
      }

      if (result.test2_score) {
        formObject.test2_score = result.test2_score;
      } else {
        formObject.test2_score = null;
      }

      if (result.test2_res) {
        formObject.test2_res = result.test2_res;
      } else {
        formObject.test2_res = null;
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

      if (result.LicenseIssuedTimeStamp) {
        formObject.LicenseIssuedTimeStamp = result.LicenseIssuedTimeStamp;
      } else {
        formObject.LicenseIssuedTimeStamp = null;
      }

      if (result.LicenseUpdatedTime) {
        formObject.LicenseUpdatedTime = result.LicenseUpdatedTime;
      } else {
        formObject.LicenseUpdatedTime = null;
      }

      if (result.timeOfFilingTheCase) {
        formObject.timeOfFilingTheCase = result.timeOfFilingTheCase;
      } else {
        formObject.timeOfFilingTheCase = null;
      }

      if (result.caseType) {
        formObject.caseType = result.caseType;
      } else {
        formObject.caseType = null;
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

      if (result.LH) {
        formObject.LH = result.LH;
      } else {
        formObject.LH = null;
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
      'LicenseId': null,
      'name': null,
      'MobileNumber': null,
      'BloodGroup': null,
      'gender': null,
      'DateofBirth': null,
      'Nationality': null,
      'State': null,
      'city': null,
      'street': null,
      'doorno': null,
      'Zipcode': null,
      'Type': null,
      'ExpiryDate': null,
      'IsApplicationAccepted': null,
      'IsLicenseUpdated': null,
      'IsLicenseRenewed': null,
      'DocType': null,
      'DocId': null,
      'ApplicationFeePaid': null,
      'Used': null,
      'test1_perf': null,
      'test1_score': null,
      'test1_res': null,
      'test2_perf': null,
      'test2_score': null,
      'test2_res': null,
      'test3_perf': null,
      'test3_score': null,
      'test3_res': null,
      'LicenseIssuedTimeStamp': null,
      'LicenseUpdatedTime': null,
      'timeOfFilingTheCase': null,
      'caseType': null,
      'condition': null,
      'punishmentType': null,
      'NoOfDaysSuspended': null,
      'TimeOfSuspensionAndRevocation': null,
      'LH': null
      });
  }

}
