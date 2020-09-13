import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSourceComponent } from './news-source.component';

describe('NewsSourceComponent', () => {
  let component: NewsSourceComponent;
  let fixture: ComponentFixture<NewsSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
