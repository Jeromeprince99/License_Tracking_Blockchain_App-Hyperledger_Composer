import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-license-apply',
  templateUrl: './license-apply.component.html',
  styleUrls: ['./license-apply.component.scss']
})
export class LicenseApplyComponent implements OnInit {

  LicenseId : String;
  ExpiryDate : Date;
  name: String;
  MobileNumber : number;
  BloodGroup : String;
  gender : String;
  DateofBirth : Date;
  Nationality : String;
  State : String;
  city : String;
  street : String;
  doorno : number;
  Zipcode : number;
  Type  : String;
  DocType : String;
  DocId : String;
  LH : String;

  url = 'http://localhost:3000/api/applyForLicense';

  constructor(private toastr: ToastrService,private router: Router, private service: HttpService) { }

  ngOnInit() {
  }

  submit(){
   
    let data= {
        "LicenseId": this.LicenseId,
        "ExpiryDate": this.ExpiryDate,
        "name": this.name,
        "MobileNumber": this.MobileNumber,
        "BloodGroup": this.BloodGroup,
        "gender": this.gender,
        "DateofBirth": this.DateofBirth,
        "Nationality": this.Nationality,
        "State": this.State,
        "city":this.city,
        "street": this.street,
        "doorno": this.doorno,
        "Zipcode": this.Zipcode,
        "Type": this.Type,
        "DocType": this.DocType,
        "DocId": this.DocId,
        "ApplicationFeePaid" : 10,
        "Used": "Dollar",
        "LH": this.LH,
    }

    this.service.post(this.url,data).subscribe(
      success=>{
        this.toastr.success('License Applied Successfully!!!', 'Success');
        this.router.navigate(['../home']);
        
      },
      error=>{
        this.toastr.error("Fill the form","Error");
      }
    );

  }

}
