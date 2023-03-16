import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import ShortUniqueId from 'short-unique-id';
import { AreaService } from 'src/app/core/api/area.service';
import { BanksService } from 'src/app/core/api/banks.service';
import { EventLineService } from 'src/app/core/api/event.service';
import { Area } from 'src/app/core/model/area';
import { Bank } from 'src/app/core/model/bank';
import { Enroll } from 'src/app/core/model/enroll';
import { EventLine } from 'src/app/core/model/event';
import * as moment from 'moment';
import { EnrollService } from 'src/app/core/api/enroll.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-inscricao',
  templateUrl: './nova-inscricao.component.html',
  styleUrls: ['./nova-inscricao.component.scss']
})
export class NovaInscricaoComponent implements OnInit {

  uuid!: string;
  banks = [new Bank()];
  selectedEvent = new EventLine();
  areas: [Area] = [new Area()];
  events: [EventLine] = [new EventLine()];
  event = new EventLine();
  enroll = new Enroll();
  enrollForm = new FormGroup({
    enrollDate: new FormControl(moment().format('YYYY-MM-DD')),
    code: new FormControl(''),
    name: new FormControl('', Validators.required),
    document: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });
  detailForm = new FormGroup({
    area: new FormControl('', Validators.required),
    eventID: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
  });
  paymentForm = new FormGroup({
    bank: new FormControl(''),
    cardFlag: new FormControl(''),
    method: new FormControl('', Validators.required),
    installment: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(
    private _areaService: AreaService,
    private _enrollService: EnrollService,
    private _eventService: EventLineService,
    private _banksService: BanksService,
    private _snackBar: MatSnackBar,
    private _route: Router,
  ) { }

  ngOnInit(): void {
    this.generateUuid();
    this.getAreas();
    this.getEvents();
    this.getBanks();
  }

  async generateUuid() {
    const uid = await new ShortUniqueId({ length: 8 });
    this.uuid = uid();
    console.log(this.uuid);
  }

  async getAreas() {
    await this._areaService.areaGet().subscribe({
      next: (result) => {
        this.areas = result;
      },
      error: (err) => {
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 });
      }
    })
  }

  async getBanks() {
    await this._banksService.banksGet().subscribe({
      next: (result) => {
        this.banks = result;
      },
      error: (err) => {
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 });
      }
    })
  }

  async getEvents() {
    await this._eventService.EventLinesGet().subscribe({
      next: (result) => {
        this.events = result;
      },
      error: (err) => {
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 });
      }
    })
  }

  async getEventId(id: string) {
    await this._eventService.EventLinesIdGet(id).subscribe({
      next: (result) => {
        this.event = result;
      },
      error: (err) => {
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 });
      }
    })
  }

  montEnroll() {
    this.enroll.age = Number(this.enrollForm.controls.age.value!);
    this.enroll.amount = Number(this.detailForm.controls.amount.value!);
    this.enroll.area = { name: this.detailForm.controls.area.value! };
    this.enroll.bank = this.paymentForm.controls.bank.value!;
    this.enroll.cardFlag = this.paymentForm.controls.cardFlag.value!;
    this.enroll.code = this.enrollForm.controls.code.value!;
    this.enroll.createdAt = moment().format();
    this.enroll.document = this.enrollForm.controls.document.value!;
    this.enroll.event = this.event;
    this.enroll.installment = Number(this.paymentForm.controls.installment.value!);
    this.enroll.name = this.enrollForm.controls.name.value!;
    this.enroll.paymentMethod = this.paymentForm.controls.method.value!;
    this.enroll.phoneNumber = this.enrollForm.controls.phoneNumber.value!;
    this.enroll.status = this.paymentForm.controls.status.value!;
    this.enroll.uploadedAt = moment().format();
    this.submitEnroll();
  }

  async submitEnroll() {
    await this._enrollService.enrollsPost(this.enroll).subscribe({
      next: (result) => {
        this._snackBar.open('Inscrição realizada com sucesso!', 'FECHAR', { duration: 2000 });
        this._route.navigateByUrl('ministerio/inscricoes');
      },
      error: (err) => {
        this._snackBar.open(err.error.message, 'FECHAR', { duration: 2000 });
      }
    })
  }

  validateEnroll() {
    this.getEventId(this.detailForm.controls.eventID.value!);
    this.enrollForm.controls.code.setValue(this.uuid);
    if (this.detailForm.controls.amount.value === this.detailForm.controls.cost.value) {
      console.log("... TÁ PAGO");
      this.paymentForm.controls.status.setValue('PAGO');
    } else {
      console.log("... PENDENTE");
      this.paymentForm.controls.status.setValue('PENDENTE');
    };
    this.montEnroll();
  }



}
