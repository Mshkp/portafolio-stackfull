import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalenthubDetail } from './talenthub-detail';

describe('TalenthubDetail', () => {
  let component: TalenthubDetail;
  let fixture: ComponentFixture<TalenthubDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalenthubDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalenthubDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
