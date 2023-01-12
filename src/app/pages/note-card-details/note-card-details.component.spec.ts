import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCardDetailsComponent } from './note-card-details.component';

describe('NoteCardDetailsComponent', () => {
  let component: NoteCardDetailsComponent;
  let fixture: ComponentFixture<NoteCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
