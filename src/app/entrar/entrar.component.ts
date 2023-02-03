import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../core/api/auth.service';
import { Component } from '@angular/core';
import { UsersService } from '../core/api/users.service';
import { Login } from '../core/model/login';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent {

  public showPassword: boolean = false;

  public login: Login = new Login();
  public authForm = new FormGroup ({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
  })
  constructor(
    private _authService : AuthService,
    private _userService : UsersService,
    private _route: Router,
    private _snackBar: MatSnackBar
  ) {}

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public authentication() {
    this.login.email = this.authForm.controls.email.value!;
    this.login.password = this.authForm.controls.password.value!;
    this._authService.authLoginPost(this.login).subscribe({
      next: (result) => {
        console.log(result.token, result.email);
        window.localStorage.setItem('token', result.token);
        window.localStorage.setItem('email', this.login.email!);
        this._route.navigateByUrl('/');
      },
      error: (err) => {
        console.error(err.error.message);
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 })
      }
    })
  }

}
