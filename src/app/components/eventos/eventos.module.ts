import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { EventLineService } from 'src/app/core/api/event.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { EventosComponent } from './eventos.component';


@NgModule({
  declarations: [
    EventosComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    MaterialModule,
    MatExpansionModule
  ],
  providers: [
    EventLineService 
  ]
})
export class EventosModule { }
