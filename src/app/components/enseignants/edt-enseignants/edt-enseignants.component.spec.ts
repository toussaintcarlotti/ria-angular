import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtEnseignantsComponent } from './edt-enseignants.component';

describe('EdtEnseignantsComponent', () => {
  let component: EdtEnseignantsComponent;
  let fixture: ComponentFixture<EdtEnseignantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdtEnseignantsComponent]
    });
    fixture = TestBed.createComponent(EdtEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
