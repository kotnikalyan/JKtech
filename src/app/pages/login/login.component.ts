import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {data} from '../../user.json'
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);
  constructor(private quoteService: DataServiceService){}
  userData:any = data;
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  onSubmit(){
   
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
     let user =  this.userData.filter( (item:any) => item.email === this.loginForm.value.email && item.password === this.loginForm.value.password
     )
     if(user.length === 1 ) {
      this.router.navigate(['/dashboard']);
      this.quoteService.updateData(user);
     }
     console.log(user)
      // if(this.loginForm.value.email =="admin@gmail.com" && this.loginForm.value.password === "Admin"){
      //   console.log(this.loginForm.value.password );

      //    this.router.navigate(['/dashboard']);
      // }
      // this.authService.login(this.loginForm.value).subscribe((data: any) => {
      //   // if(this.authService.isLoggedIn()){
      //   //   this.router.navigate(['/admin']);
      //   // }
      //   console.log(data);
      // });
    }
  }
}
