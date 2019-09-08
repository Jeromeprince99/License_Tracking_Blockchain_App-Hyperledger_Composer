import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { QueryLicenseDetailsComponent } from './query-license-details/query-license-details.component';
import { FileACaseComponent } from './file-acase/file-acase.component';
import { LicenseApplyComponent } from './license-apply/license-apply.component';
import { RegisterLicenseHolderComponent } from './register-license-holder/register-license-holder.component';
import { RegisterInvestigatorComponent } from './register-investigator/register-investigator.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Apply-for-license', component: LicenseApplyComponent },
  { path: 'Query-license-details', component: QueryLicenseDetailsComponent },
  { path: 'File-a-case', component: FileACaseComponent },
  { path: 'Register-License-Holder', component: RegisterLicenseHolderComponent },
  { path: 'Register-Investigator', component: RegisterInvestigatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
