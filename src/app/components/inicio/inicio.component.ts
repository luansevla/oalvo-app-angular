import { User } from 'src/app/core/model/user';
import { UsersService } from './../../core/api/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Section {
  name: string;
  route: string;
  icon: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  folders: Section[] = [
    {
      name: 'Meus Dados',
      route: '/meusdados',
      icon: 'account_circle'
    }
  ];
  notes: Section[] = [
    {
      name: 'Inscrições',
      route: '/ministerio/inscricoes',
      icon: 'receipt_long'
    }
  ];
  user!: User;
  email!: string;
  constructor(
    private _userService: UsersService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email')!;
    this.getUser();
  }

  getUser() {
    if (localStorage.getItem('email')) {
      this._userService.usersFindByEmailEmailGet(this.email).subscribe({
        next: (result) => {
          this.user = result;
          this._userService.user = result;
          console.log(this.user);
        },
        error: (err) => {
          console.error(err);
          window.localStorage.clear();
          this._route.navigateByUrl('/entrar');
        }
      })
    } else {
      window.localStorage.clear();
      this._route.navigateByUrl('/entrar');
    }
  }

}