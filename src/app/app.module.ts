import { UsersService } from './core/api/users.service';
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
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
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { EventLineService } from './core/api/event.service';
import { CdkTableModule } from '@angular/cdk/table';
import { EventosModule } from './components/eventos/eventos.module';
import {  MinistriesModule } from './components/ministerios/ministries.module';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { BanksService } from './core/api/banks.service';
import { EnrollService } from './core/api/enroll.service';
import { CepService } from './core/api/cep.service';
import { UserService } from './core/api/user.service';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosModule } from './components/usuarios/usuarios.module';
registerLocaleData(ptBr)

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
    EventosModule,
    MinistriesModule,
    UsuariosModule
  ],
  providers: [
    AuthService,
    MenuService,
    AreaService,
    CellService,
    AddressService,
    UserService,
    CepService,
    MinistryService,
    EventLineService,
    EnrollService, 
    BanksService,
    UsersService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
