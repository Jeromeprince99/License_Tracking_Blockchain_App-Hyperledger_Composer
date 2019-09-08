import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-file-acase',
  templateUrl: './file-acase.component.html',
  styleUrls: ['./file-acase.component.scss']
})
export class FileACaseComponent implements OnInit {

  license_id: string;
  caseFiler : string;
  Description : string;
  fine : string;
  condition : string;

  url = 'http://localhost:3000/api/fileACase';

  constructor(private toast: ToastrService,private router: Router, private service: HttpService) { }

  ngOnInit() {
  }

  submit(){

    let data= {
      "caseFiler": this.caseFiler,
      "timeOfFilingTheCase": "2019-09-08T08:16:08.352Z",
      "caseType": {       
        "Description": this.Description,
        "fine": this.fine,
      },
      "condition": this.condition,
      "LicenseId": this.license_id
    }

    this.service.post(this.url,data).subscribe(
      success=>{
        this.toast.success("Case filed","Info");
        this.router.navigate(['../home']);
      },
      error=>{
        this.toast.error("Fill the form","Error");
      }
    );

  }
}
