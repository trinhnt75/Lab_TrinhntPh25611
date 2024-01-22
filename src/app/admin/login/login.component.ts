import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
  
@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.maxLength(25)]),
    phone: new FormControl("", [Validators.required,Validators.minLength(10), Validators.pattern('0+[0-9]+')]),
    cmnd: new FormControl("", [Validators.required, Validators.minLength(13),]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });
  mess = "";
  router = inject(Router)
  onSubmit() {
    
  }
}
