import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelfoldiUtakComponent } from './belfoldi-utak.component';

describe('BelfoldiUtakComponent', () => {
  let component: BelfoldiUtakComponent;
  let fixture: ComponentFixture<BelfoldiUtakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelfoldiUtakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelfoldiUtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
