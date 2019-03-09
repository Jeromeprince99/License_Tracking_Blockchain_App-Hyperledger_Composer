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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { HistoryComponent} from './history/history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'License', component: LicenseComponent },
  { path: 'LicenseOrganization', component: LicenseOrganizationComponent },
  { path: 'LicenseHolder', component: LicenseHolderComponent },
  { path: 'RuleViolationDept', component: RuleViolationDeptComponent },
  { path: 'applyForLicense', component: applyForLicenseComponent },
  { path: 'applicationAcceptance', component: applicationAcceptanceComponent },
  { path: 'postWrittenTestDetail', component: postWrittenTestDetailComponent },
  { path: 'postSimulatorTestDetail', component: postSimulatorTestDetailComponent },
  { path: 'postOnRoadTestDetail', component: postOnRoadTestDetailComponent },
  { path: 'supplyLicense', component: supplyLicenseComponent },
  { path: 'applyForUpdateLicense', component: applyForUpdateLicenseComponent },
  { path: 'isLicenseUpdated', component: isLicenseUpdatedComponent },
  { path: 'applyRenewLicense', component: applyRenewLicenseComponent },
  { path: 'isLicenseRenewed', component: isLicenseRenewedComponent },
  { path: 'fileACase', component: fileACaseComponent },
  { path: 'postSuspensionOrRevocation', component: postSuspensionOrRevocationComponent },
  { path: 'viewhistory',component: HistoryComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
 providers: []
})
export class AppRoutingModule { }
