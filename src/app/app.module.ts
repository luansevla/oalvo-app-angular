import { UsersService } from './core/api/users.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/api/auth.service';
import { MenuService } from './core/api/menu.service';
import { AreaService } from './core/api/area.service';
import { CellService } from './core/api/cell.service';
import { AddressService } from './core/api/address.service';
import { MinistryService } from './core/api/ministry.service';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { EventLineService } from './core/api/event.service';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { EventosModule } from './components/eventos/eventos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkTableModule,
    CdkTableModule,
    EventosModule
  ],
  providers: [
    AuthService,
    MenuService,
    AreaService,
    CellService,
    AddressService,
    MinistryService,
    EventLineService,
    UsersService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
