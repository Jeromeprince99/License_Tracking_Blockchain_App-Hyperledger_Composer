import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LicenseApplyComponent } from './license-apply/license-apply.component';
import { QueryLicenseDetailsComponent } from './query-license-details/query-license-details.component';
import { FileACaseComponent } from './file-acase/file-acase.component';
import { RegisterLicenseHolderComponent } from './register-license-holder/register-license-holder.component';
import { FormsModule } from '@angular/forms';
import { RegisterInvestigatorComponent } from './register-investigator/register-investigator.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LicenseApplyComponent,
    QueryLicenseDetailsComponent,
    FileACaseComponent,
    RegisterLicenseHolderComponent,
    RegisterInvestigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
