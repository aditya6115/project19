import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Products19Component } from './products19.component';

describe('Products19Component', () => {
  let component: Products19Component;
  let fixture: ComponentFixture<Products19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Products19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Products19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
