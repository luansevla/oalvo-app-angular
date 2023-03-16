import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaInscricaoComponent } from './nova-inscricao.component';

describe('NovaInscricaoComponent', () => {
  let component: NovaInscricaoComponent;
  let fixture: ComponentFixture<NovaInscricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaInscricaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
