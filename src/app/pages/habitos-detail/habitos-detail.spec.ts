import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitosDetail } from './habitos-detail';

describe('HabitosDetail', () => {
  let component: HabitosDetail;
  let fixture: ComponentFixture<HabitosDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabitosDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitosDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
