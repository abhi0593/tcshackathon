import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartyDetailComponent } from './counterparty-detail.component';

describe('CounterpartyDetailComponent', () => {
  let component: CounterpartyDetailComponent;
  let fixture: ComponentFixture<CounterpartyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterpartyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
