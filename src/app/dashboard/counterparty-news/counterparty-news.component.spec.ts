import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartyNewsComponent } from './counterparty-news.component';

describe('CounterpartyNewsComponent', () => {
  let component: CounterpartyNewsComponent;
  let fixture: ComponentFixture<CounterpartyNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterpartyNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartyNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
