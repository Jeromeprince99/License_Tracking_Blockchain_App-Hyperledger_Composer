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
import { LicenseOrganizationService } from './LicenseOrganization.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-licenseorganization',
  templateUrl: './LicenseOrganization.component.html',
  styleUrls: ['./LicenseOrganization.component.css'],
  providers: [LicenseOrganizationService]
})
export class LicenseOrganizationComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;

  LicenseOrgID = new FormControl('', Validators.required);
  Type = new FormControl('', Validators.required);
  Nationality = new FormControl('', Validators.required);
  Location = new FormControl('', Validators.required);
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);


  constructor(public serviceLicenseOrganization: LicenseOrganizationService, fb: FormBuilder) {
    this.myForm = fb.group({
      LicenseOrgID: this.LicenseOrgID,
      Type: this.Type,
      Nationality: this.Nationality,
      Location: this.Location,
      username: this.username,
      password: this.password
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceLicenseOrganization.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(participant => {
        tempList.push(participant);
      });
      this.allParticipants = tempList;
    })
    .catch((error) => {
      if (error === 'Server error') {
        this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
      } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        this.errorMessage = error;
      }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
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
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org1.example.com.model.LicenseOrganization',
      'LicenseOrgID': this.LicenseOrgID.value,
      'Type': this.Type.value,
      'Nationality': this.Nationality.value,
      'Location': this.Location.value,
      'username': this.username.value,
      'password': this.password.value
    };

    this.myForm.setValue({
      'LicenseOrgID': null,
      'Type': null,
      'Nationality': null,
      'Location': null,
      'username': null,
      'password': null
    });

    return this.serviceLicenseOrganization.addParticipant(this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'LicenseOrgID': null,
        'Type': null,
        'Nationality': null,
        'Location': null,
        'username': null,
        'password': null
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


   updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org1.example.com.model.LicenseOrganization',
      'Type': this.Type.value,
      'Nationality': this.Nationality.value,
      'Location': this.Location.value,
      'username': this.username.value,
      'password': this.password.value
    };

    return this.serviceLicenseOrganization.updateParticipant(form.get('LicenseOrgID').value, this.participant)
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


  deleteParticipant(): Promise<any> {

    return this.serviceLicenseOrganization.deleteParticipant(this.currentId)
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

    return this.serviceLicenseOrganization.getparticipant(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'LicenseOrgID': null,
        'Type': null,
        'Nationality': null,
        'Location': null,
        'username': null,
        'password': null
      };

      if (result.LicenseOrgID) {
        formObject.LicenseOrgID = result.LicenseOrgID;
      } else {
        formObject.LicenseOrgID = null;
      }

      if (result.Type) {
        formObject.Type = result.Type;
      } else {
        formObject.Type = null;
      }

      if (result.Nationality) {
        formObject.Nationality = result.Nationality;
      } else {
        formObject.Nationality = null;
      }

      if (result.Location) {
        formObject.Location = result.Location;
      } else {
        formObject.Location = null;
      }

      if (result.username) {
        formObject.username = result.username;
      } else {
        formObject.username = null;
      }

      if (result.password) {
        formObject.password = result.password;
      } else {
        formObject.password = null;
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
      'LicenseOrgID': null,
      'Type': null,
      'Nationality': null,
      'Location': null,
      'username': null,
      'password': null
    });
  }
}
