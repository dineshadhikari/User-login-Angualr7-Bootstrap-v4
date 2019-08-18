import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControlName
} from "@angular/forms";

import { AuthenticationService } from "./services/authentication.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "User-Login";
  submitted: boolean;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let body = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(body).subscribe((data: any) => {
      //your will data success or false
      if (data.success) {
        //do some action
      } else {
        //do some action
        //show error mesage
      }
    })
  }
}
