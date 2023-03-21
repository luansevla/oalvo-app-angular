import { User } from 'src/app/core/model/user';
import { UsersService } from './../../core/api/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/api/user.service';
import { Menu } from 'src/app/core/model/menu';
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

  menus?: Menu[] ;
  user!: User;
  email!: string;
  constructor(
    private _userService: UserService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.email = localStorage.getItem('email')!;
    this.getUser();
  }

  getUser() {
    if (localStorage.getItem('email')) {
      this._userService.getUserByEmail(this.email).subscribe({
        next: (result) => {
          this.user = result;
          this.menus = result.menus;
          console.log(result.menus);
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
