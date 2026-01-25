import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicaDetail } from './clinica-detail';

describe('ClinicaDetail', () => {
  let component: ClinicaDetail;
  let fixture: ComponentFixture<ClinicaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicaDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
