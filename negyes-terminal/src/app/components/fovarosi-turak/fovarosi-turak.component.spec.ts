import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FovarosiTurakComponent } from './fovarosi-turak.component';

describe('FovarosiTurakComponent', () => {
  let component: FovarosiTurakComponent;
  let fixture: ComponentFixture<FovarosiTurakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FovarosiTurakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FovarosiTurakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
