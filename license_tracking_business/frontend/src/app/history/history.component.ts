import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-history',
  template: `<button (click)="get_History()">Get History</button>


  <ul>
    <li *ngFor="let history of History" >
      -- id: {{history.LicenseId}}
      -- name: {{history.name}}
     
    </li>
  </ul> `,
  })
export class HistoryComponent implements OnInit {

  private History  = []; 
  constructor(private httpClient: HttpClient){}
  ngOnInit() {
  }

  get_History(){
    this.httpClient.get('http://localhost:3000/api/queries/viewHistoryOfCaseFiledOnAParticularLicense?LicenseId=1212').subscribe((res : any[])=>{
    console.log(res);
    this.History = res;
    });
}

 
}
