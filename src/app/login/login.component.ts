import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: ApiService, private router: Router) {
    this.angForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  postdata(angForm1:any) {
    console.log(angForm1);
    
    this.dataService.userlogin(angForm1.value.user, angForm1.value.password)
      .pipe(first())
      .subscribe(
        data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
          this.router.navigate([redirect]);
        },
        error => {
          alert("User name or password is incorrect")
        });
  }
  get user() { 
    return this.angForm.get('user'); 
  }
  get password() { 
    return this.angForm.get('password'); 
  }

}
