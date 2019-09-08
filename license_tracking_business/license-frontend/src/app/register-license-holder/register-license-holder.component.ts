import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register-license-holder',
  templateUrl: './register-license-holder.component.html',
  styleUrls: ['./register-license-holder.component.scss']
})
export class RegisterLicenseHolderComponent implements OnInit {

  license_id : string="";
  license_holder_name : string="";
  username : string="";
  password : string="";

  url = 'http://localhost:3000/api/LicenseHolder';

  constructor(private toast: ToastrService,private router: Router, private service: HttpService) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.license_id)
    console.log(this.license_holder_name)
    let data= {
      "LicenseHolderId": this.license_id,
      "LicenseHolderName": this.license_holder_name,
      "username": this.username,
      "password": this.password
    }

    this.service.post(this.url,data).subscribe(
      success=>{
        this.license_id = "";
        this.license_holder_name = "";
        this.username = "";
        this.password = "";
        this.router.navigate(['../Apply-for-license']);
        console.log("success");
      },
      error=>{
        this.toast.error("Fill the form","Error");
      }
    );

  }
}
