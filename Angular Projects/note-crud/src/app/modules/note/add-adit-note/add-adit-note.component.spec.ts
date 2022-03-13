import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAditNoteComponent } from './add-adit-note.component';

describe('AddAditNoteComponent', () => {
  let component: AddAditNoteComponent;
  let fixture: ComponentFixture<AddAditNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAditNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
