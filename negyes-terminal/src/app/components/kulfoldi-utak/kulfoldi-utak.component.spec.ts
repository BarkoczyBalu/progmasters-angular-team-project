import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KulfoldiUtakComponent } from './kulfoldi-utak.component';

describe('KulfoldiUtakComponent', () => {
  let component: KulfoldiUtakComponent;
  let fixture: ComponentFixture<KulfoldiUtakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KulfoldiUtakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KulfoldiUtakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
