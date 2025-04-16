import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {}


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      this.loginService.login(data).subscribe(response=> {
        console.log("hit:>>>");
      })
    }
  }
}