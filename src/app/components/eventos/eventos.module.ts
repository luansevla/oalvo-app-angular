import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosComponent } from './eventos.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MaterialModule
  ]
})
export class EventosModule { }
