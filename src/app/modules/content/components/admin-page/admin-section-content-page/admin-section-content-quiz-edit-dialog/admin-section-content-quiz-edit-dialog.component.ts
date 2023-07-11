import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionContentQuizDto } from 'src/app/modules/api/models';
import { SectionContentQuizService } from 'src/app/modules/api/services';
import { ThemeService } from 'src/app/modules/core/services/theme.service';

@Component({
  selector: 'app-admin-section-content-quiz-edit-dialog',
  templateUrl: './admin-section-content-quiz-edit-dialog.component.html',
  styleUrls: ['./admin-section-content-quiz-edit-dialog.component.scss'],
})
export class AdminSectionContentQuizEditDialogComponent {
  matches = false;
  darkTheme = false;
  formGroup = new FormGroup({
    description: new FormControl(this.data.quizData.description, [
      Validators.required,
    ]),
    correctAnswer: new FormControl(this.data.quizData.correctAnswer, [
      Validators.required,
    ]),
    quizTypeId: new FormControl(this.data.quizData.quizTypeId, [
      Validators.required,
    ]),
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private sectionContentQuizService: SectionContentQuizService,
    @Inject(MAT_DIALOG_DATA)
    public data: { quizData: SectionContentQuizDto; sectionContentId: string }
  ) {
    this.themeService.isDarkTheme.subscribe((value) => {
      this.darkTheme = value;
    });
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onClickSubmit = () => {
    if (this.formGroup.valid) {
      if(this.formGroup.value.quizTypeId === 1) {
        this.formGroup.value.correctAnswer = null;
      }
      this.sectionContentQuizService
        .apiSectionContentSectionContentIdQuizAdminPut({
          sectionContentId: this.data.sectionContentId,
          body: {
            sectionContentId: this.data.sectionContentId,
            id: this.data.quizData.id,
            ...this.formGroup.value,
            quizTypeId: this.formGroup.value.quizTypeId as number,
          },
        })
        .subscribe((value) => {
          window.location.reload();
        });
    }
    this.formGroup.reset();
  };
}
