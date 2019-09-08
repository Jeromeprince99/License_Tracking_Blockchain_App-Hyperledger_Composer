import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-investigator',
  templateUrl: './register-investigator.component.html',
  styleUrls: ['./register-investigator.component.scss']
})
export class RegisterInvestigatorComponent implements OnInit {

  dept_id : string;
  dept_name : string;
  username : string;
  password : string;

  url = 'http://localhost:3000/api/RuleViolationDept';

  constructor(private toast: ToastrService,private router: Router, private service: HttpService) { }

  ngOnInit() {
  }

  submit(){

    let data= {
      "DeptId": this.dept_id,
      "DeptName": this.dept_name,
      "username": this.username,
      "password": this.password
    }

    this.service.post(this.url,data).subscribe(
      success=>{
        this.toast.success("Successfully registered","Success");
        this.router.navigate(['../File-a-case']);
        console.log("success");
      },
      error=>{
        this.toast.error("Fill the form","Error");
      }
    );

  }
}
