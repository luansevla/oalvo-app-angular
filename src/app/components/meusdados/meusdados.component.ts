import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/api/users.service';
import { User } from '../../../../../oalvo-app/src/app/core/model/user';

@Component({
  selector: 'app-meusdados',
  templateUrl: './meusdados.component.html',
  styleUrls: ['./meusdados.component.scss']
})
export class MeusdadosComponent implements OnInit{

  panelOpenState = false;
  user!: User;
  constructor(
    private readonly _userService: UsersService
  ) {}

  ngOnInit(): void {
    this._userService.usersFindByEmailEmailGet(localStorage.getItem('email')!).subscribe({
      next: (result) => {
        this.user = result;
      },
    })
  }

}
