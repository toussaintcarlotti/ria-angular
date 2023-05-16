import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEnseignantsComponent } from './index-enseignants.component';

describe('IndexEnseignantsComponent', () => {
  let component: IndexEnseignantsComponent;
  let fixture: ComponentFixture<IndexEnseignantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexEnseignantsComponent]
    });
    fixture = TestBed.createComponent(IndexEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
