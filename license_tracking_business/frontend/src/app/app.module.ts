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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LicenseComponent } from './License/License.component';

import { LicenseOrganizationComponent } from './LicenseOrganization/LicenseOrganization.component';
import { LicenseHolderComponent } from './LicenseHolder/LicenseHolder.component';
import { RuleViolationDeptComponent } from './RuleViolationDept/RuleViolationDept.component';

import { applyForLicenseComponent } from './applyForLicense/applyForLicense.component';
import { applicationAcceptanceComponent } from './applicationAcceptance/applicationAcceptance.component';
import { postWrittenTestDetailComponent } from './postWrittenTestDetail/postWrittenTestDetail.component';
import { postSimulatorTestDetailComponent } from './postSimulatorTestDetail/postSimulatorTestDetail.component';
import { postOnRoadTestDetailComponent } from './postOnRoadTestDetail/postOnRoadTestDetail.component';
import { supplyLicenseComponent } from './supplyLicense/supplyLicense.component';
import { applyForUpdateLicenseComponent } from './applyForUpdateLicense/applyForUpdateLicense.component';
import { isLicenseUpdatedComponent } from './isLicenseUpdated/isLicenseUpdated.component';
import { applyRenewLicenseComponent } from './applyRenewLicense/applyRenewLicense.component';
import { isLicenseRenewedComponent } from './isLicenseRenewed/isLicenseRenewed.component';
import { fileACaseComponent } from './fileACase/fileACase.component';
import { postSuspensionOrRevocationComponent } from './postSuspensionOrRevocation/postSuspensionOrRevocation.component';
import { HistoryComponent } from './history/history.component';
 

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseComponent,
    LicenseOrganizationComponent,
    LicenseHolderComponent,
    RuleViolationDeptComponent,
    applyForLicenseComponent,
    applicationAcceptanceComponent,
    postWrittenTestDetailComponent,
    postSimulatorTestDetailComponent,
    postOnRoadTestDetailComponent,
    supplyLicenseComponent,
    applyForUpdateLicenseComponent,
    isLicenseUpdatedComponent,
    applyRenewLicenseComponent,
    isLicenseRenewedComponent,
    fileACaseComponent,
    postSuspensionOrRevocationComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
