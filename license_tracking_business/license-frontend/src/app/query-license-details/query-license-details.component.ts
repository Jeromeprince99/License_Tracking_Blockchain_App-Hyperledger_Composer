import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-query-license-details',
  templateUrl: './query-license-details.component.html',
  styleUrls: ['./query-license-details.component.scss']
})
export class QueryLicenseDetailsComponent implements OnInit {

  SearchQuery : string;
  searchSuccess : boolean = false;
  applicationData : any = {};
  caseData : Array<any> = [];

  url1 = 'http://localhost:3000/api/applyForLicense';
  url2 = 'http://localhost:3000/api/fileACase';

  constructor(private toast: ToastrService,private router: Router, private service: HttpService) { }

  ngOnInit() {
  }

  search(){

    let filter= {
     "LicenseId":this.SearchQuery
    }

    this.service.get(this.url1,filter).subscribe(
      data=>{
       
        for(let i=0;i<data.length;i++){
          if(data[i].LicenseId == this.SearchQuery){
            this.applicationData =  data[i];
          }
        }        
        console.log(data);
      },
      error=>{
        this.toast.error("Enter License ID","Error");
      }
    );

    this.service.get(this.url2,filter).subscribe(
      data=>{
        
        for(let i=0;i<data.length;i++){
          if(data[i].LicenseId == this.SearchQuery){
            this.caseData.push(data[i]);
          }
        }  

        console.log(data);
      },
      error=>{
        this.toast.error("Enter License ID","Error");
      }
    );

    this.searchSuccess = true;

  }

}
