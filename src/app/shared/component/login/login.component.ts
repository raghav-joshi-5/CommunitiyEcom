import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  sighUpForm!: FormGroup;
  allreadyhasaccount: boolean = false;
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.createloginForm();
    this.createsignupForm();
  }
  createloginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }
  createsignupForm() {
    this.sighUpForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      userRole: new FormControl('buyer', Validators.required),
    });
  }

  onSignup() {
    if (this.sighUpForm.valid) {
      let user = this.sighUpForm.value;
      this._productService.registeruser(user).subscribe({
        next: (res) => {
          alert(res.message);
          this.sighUpForm.reset();
          this.allreadyhasaccount = true;
        },
        error: (err) => {
          alert(err.error.message);
        },
      });
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      let user = this.loginForm.value;
      this._productService.loginuser(user).subscribe({
        next: (res) => {
          alert(res.message);
          this.loginForm.reset();
          this._router.navigate(['home']);
          this._productService.savetokentoLS(res.token);
          this._productService.saveuserrole(res.userRole);
        },
        error: (res) => {
          alert(res.error.message);
        },
      });
    }
  }
}
