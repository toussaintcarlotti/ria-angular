import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEtudiantsComponent } from './index-etudiants.component';

describe('IndexEtudiantsComponent', () => {
  let component: IndexEtudiantsComponent;
  let fixture: ComponentFixture<IndexEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEtudiantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
