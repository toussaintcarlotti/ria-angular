import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnseignantComponent } from './edit-enseignant.component';

describe('EditEnseignantComponent', () => {
  let component: EditEnseignantComponent;
  let fixture: ComponentFixture<EditEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEnseignantComponent]
    });
    fixture = TestBed.createComponent(EditEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
