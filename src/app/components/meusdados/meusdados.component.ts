import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { UsersService } from '../../core/api/users.service';

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
