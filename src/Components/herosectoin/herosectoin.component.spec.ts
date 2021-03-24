import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosectoinComponent } from './herosectoin.component';

describe('HerosectoinComponent', () => {
  let component: HerosectoinComponent;
  let fixture: ComponentFixture<HerosectoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosectoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosectoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
