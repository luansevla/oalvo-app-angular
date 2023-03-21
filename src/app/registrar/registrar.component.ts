import { Component } from '@angular/core';
import { AuthService } from '../core/api/auth.service';
import { UsersService } from '../core/api/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Login } from '../core/model/login';
import { CepService } from '../core/api/cep.service';
import { User } from '../core/model/user';
import { Address } from '../core/model/address';
import * as moment from 'moment';
import { UserService } from '../core/api/user.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent {
  public showPassword: boolean = false;
  public subscription!: Subscription;
  protected passwordValidation: boolean = false;
  protected passwordText: string = 'Inválido';
  protected zipcodeValidate: string = '';
  protected isLinear = false;
  protected user = new User();
  protected address: Address = new Address();
  protected firstForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    birthday: new FormControl('', Validators.required),
    document: new FormControl('', Validators.required),
    status: new FormControl('USUARIO', Validators.required),
  });
  protected secoundForm = new FormGroup({
    zipcode: new FormControl('', Validators.minLength(8)),
    street: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
    district: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    country: new FormControl('BR', Validators.required),
  });
  protected thirdForm = new FormGroup({
    firstPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]){8,}/),
    ]),
    secoundPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]){8,}/),
    ]),
  });

  constructor(
    private _authService: AuthService,
    private _userService: UserService,
    private _route: Router,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private _cepSevice: CepService
  ) {}

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  protected getAddress() {
    this.zipcodeValidate = this.secoundForm.controls.zipcode.value!;
    if (this.zipcodeValidate.length == 8) {
      this._cepSevice
        .getAddressByCep(this.secoundForm.controls.zipcode.value!)
        .subscribe({
          next: (result: any) => {
            this.secoundForm.controls.zipcode.setValue(result.cep);
            this.secoundForm.controls.street.setValue(result.logradouro);
            this.secoundForm.controls.detail.setValue(result.complemento);
            this.secoundForm.controls.district.setValue(result.bairro);
            this.secoundForm.controls.city.setValue(result.localidade);
            this.secoundForm.controls.state.setValue(result.uf);
            console.log(this.secoundForm.value);
          },
          error: (err: any) => {
            console.error(err.error.message);
            this._snackBar.open(err.error.message, 'FECHAR', {
              duration: 2000,
            });
          },
        });
    } else {
      this._snackBar.open('CEP de 8 dígitos. Exemplo: 10010001', 'FECHAR', {
        duration: 2000,
      });
    }
  }

  protected validatePassword() {
    if (
      this.thirdForm.controls.firstPassword.value ===
        this.thirdForm.controls.secoundPassword.value &&
      this.thirdForm.valid
    ) {
      this.passwordValidation = true;
      this.passwordText = 'Válido';
    } else {
      this.passwordValidation = false;
      this.passwordText = 'Inválido';
    }
  }

  userMount() {
    this.address.zipcode = this.secoundForm.controls.zipcode.value!.trim();
    this.address.street = this.secoundForm.controls.street.value!.trim();
    this.address.detail = this.secoundForm.controls.detail.value!.trim();
    this.address.district = this.secoundForm.controls.district.value!.trim();
    this.address.city = this.secoundForm.controls.city.value!.trim();
    this.address.state = this.secoundForm.controls.state.value!.trim();
    this.address.country = this.secoundForm.controls.country.value!;
    this.user.address = [this.address];
    this.user.password = this.thirdForm.controls.firstPassword.value!.trim();
    this.user.name = this.firstForm.controls.name.value!.trim();
    this.user.email = this.firstForm.controls.email.value!.trim();
    this.user.birthday = this.firstForm.controls.birthday.value!;
    this.user.document = this.firstForm.controls.document.value!;
    this.user.phoneNumber = this.firstForm.controls.phoneNumber.value!;
    this.user.status = this.firstForm.controls.status.value!;
    this.user.createAt = moment().format();
    this.user.updateAt = moment().format();
    this.user.area = [];
    this.user.menus = [
      {
        label: 'Meus Dados',
        route: '/meusdados',
        icon: 'account_circle',
      },
    ];
  }

  public authentication() {
    this.userMount();
    this.subscription = this._userService.createAnUser(this.user).subscribe({
      next: (result: User) => {
        console.log(result);
      },
      error: (error: any) => {
        console.error(error.error);
        this._route.navigateByUrl('/registrar');
      },
      complete: () => {
        this._route.navigateByUrl('/entrar');
      },
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
