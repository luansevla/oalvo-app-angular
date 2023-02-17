import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/api/auth.service';
import { EventLineService } from 'src/app/core/api/event.service';
import { EventLine } from 'src/app/core/model/event';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  events : [EventLine] = [new EventLine()];
  panelOpenState = true;
  constructor(
    private _eventLineService : EventLineService,
    private _authService : AuthService,
    private _route: Router,
    private _snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.listEvents();
  }

  
  listEvents() {
    this._eventLineService.EventLinesGet().subscribe({
      next: (result) => {
        this.events = result;
        console.log(this.events);
      },
      error: (err) => {
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 })
      }
    })
  }
}
