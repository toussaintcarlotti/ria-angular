import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtEtudiantComponent } from './edt-etudiant.component';

describe('EdtComponent', () => {
  let component: EdtEtudiantComponent;
  let fixture: ComponentFixture<EdtEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdtEtudiantComponent]
    });
    fixture = TestBed.createComponent(EdtEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
