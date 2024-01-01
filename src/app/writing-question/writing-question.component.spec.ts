import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingQuestionComponent } from './writing-question.component';

describe('WritingQuestionComponent', () => {
  let component: WritingQuestionComponent;
  let fixture: ComponentFixture<WritingQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WritingQuestionComponent]
    });
    fixture = TestBed.createComponent(WritingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
