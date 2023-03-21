import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model/user';
import { UserService } from 'src/app/core/api/user.service';
import { Address } from 'src/app/core/model/address';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-meusdados',
  templateUrl: './meusdados.component.html',
  styleUrls: ['./meusdados.component.scss'],
})
export class MeusdadosComponent implements OnInit {
  panelOpenState = false;
  user!: User;
  address!: Address[] | undefined;
  constructor(
    private readonly _userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this._userService.getUserByEmail(localStorage.getItem('email')!).subscribe({
      next: (result: User) => {
        this.user = result;
        this.address = result.address;
      },
      error: (error: any) => {
        this._snackBar.open(error.error, 'Fechar', { duration: 2000 });
      },
    });
  }
}
