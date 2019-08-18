import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User-Login'
  submitted: boolean
  loginForm: FormGroup

constructor(
  private formBuilder: FormBuilder
){}


ngOnInit() {
  this.loginForm = this.formBuilder.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })
 
}


onSubmit() {
  this.submitted = true
  if (this.loginForm.invalid) {
    return;
  }
  let body = {
    "email" : this.loginForm.value.email, 
    'password' : this.loginForm.value.password
   }
   console.log(body)


  }


}




