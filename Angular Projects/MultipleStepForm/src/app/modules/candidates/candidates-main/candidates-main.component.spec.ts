import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesMainComponent } from './candidates-main.component';

describe('CandidatesMainComponent', () => {
  let component: CandidatesMainComponent;
  let fixture: ComponentFixture<CandidatesMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
