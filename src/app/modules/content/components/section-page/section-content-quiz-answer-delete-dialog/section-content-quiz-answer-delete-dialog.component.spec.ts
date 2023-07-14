import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContentQuizAnswerDeleteDialogComponent } from './section-content-quiz-answer-delete-dialog.component';

describe('SectionContentQuizAnswerDeleteDialogComponent', () => {
  let component: SectionContentQuizAnswerDeleteDialogComponent;
  let fixture: ComponentFixture<SectionContentQuizAnswerDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionContentQuizAnswerDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(SectionContentQuizAnswerDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
