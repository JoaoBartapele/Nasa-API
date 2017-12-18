import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastestComponent } from './fastest.component';

describe('FastestComponent', () => {
  let component: FastestComponent;
  let fixture: ComponentFixture<FastestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
