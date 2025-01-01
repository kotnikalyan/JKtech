import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { data } from '../../user.json'
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  // authService  =  inject(AuthService);
  router = inject(Router);

  public signupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  })

  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      const user: any = {
        "id": data.length + 1,
        "first_name": this.signupForm.value.name,
        "last_name": this.signupForm.value.name,
        "email": this.signupForm.value.email,
        "password": this.signupForm.value.password,
        "role": this.signupForm.value.role
      }
      localStorage.setItem('dataSource', user);
      // data.push(user)
      console.log(localStorage.getItem('dataSource'));
      //   this.authService.signup(this.signupForm.value)
      //     .subscribe({
      //       next: (data: any) => {
      //         console.log(data);
      //         this.router.navigate(['/login']);
      //       },
      //       error: (err) => console.log(err)
      //     });
    }
  }
}
