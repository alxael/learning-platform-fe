import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContentQuizAnswerAddDialogComponent } from './section-content-quiz-answer-add-dialog.component';

describe('SectionContentQuizAnswerAddDialogComponent', () => {
  let component: SectionContentQuizAnswerAddDialogComponent;
  let fixture: ComponentFixture<SectionContentQuizAnswerAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionContentQuizAnswerAddDialogComponent]
    });
    fixture = TestBed.createComponent(SectionContentQuizAnswerAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
