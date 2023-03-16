import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsComponent } from './enrollments.component';

describe('InscricoesComponent', () => {
  let component: EnrollmentsComponent;
  let fixture: ComponentFixture<EnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
