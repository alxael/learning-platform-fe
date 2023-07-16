import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  SectionContentQuizDto,
  UserAnswerDto,
} from 'src/app/modules/api/models';
import { FileService, UserAnswerService } from 'src/app/modules/api/services';
import { ThemeService } from 'src/app/modules/core/services/theme.service';

@Component({
  selector: 'app-section-content-quiz-answer-add-dialog',
  templateUrl: './section-content-quiz-answer-add-dialog.component.html',
  styleUrls: ['./section-content-quiz-answer-add-dialog.component.scss'],
})
export class SectionContentQuizAnswerAddDialogComponent {
  matches = false;
  darkTheme = false;
  formGroup = new FormGroup({
    answer: new FormControl(),
  });
  userAnswer: UserAnswerDto = {
    answer: null,
  };
  answerUrl: string | null = null;

  getUserAnswer = () => {
    this.userAnswerService
      .apiUserAnswerSectionContentIdQuizSectionContentQuizIdGet$Json({
        sectionContentId: this.data.sectionContentId as string,
        sectionContentQuizId: this.data.quizData.id as string,
      })
      .subscribe((value) => {
        this.userAnswer = value;
        if (this.data.quizData.quizTypeId === 0) {
          this.formGroup.patchValue({ answer: value.answer });
        } else {
          this.answerUrl = value.answer as string;
        }
      });
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userAnswerService: UserAnswerService,
    private fileService: FileService,
    private themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      quizData: SectionContentQuizDto;
      sectionContentId: string | null;
    },
    public matSnackbar: MatSnackBar
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
    this.themeService.isDarkTheme.subscribe((value) => {
      this.darkTheme = value;
    });
    this.getUserAnswer();
  }

  onFileChange = (event: any) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.formGroup.patchValue({
        answer: file,
      });
      this.matSnackbar.open('File uploaded!', 'Close', { duration: 3000 });
    }
  };

  onSubmitSave = () => {
    if (!this.data.quizData.quizTypeId) {
      if (this.userAnswer.answer === null) {
        this.userAnswerService
          .apiUserAnswerPost({
            body: {
              sectionContentQuizId: this.data.quizData.id,
              answer: this.formGroup.value.answer,
            },
          })
          .subscribe((value) => {
            this.getUserAnswer();
          });
      } else {
        this.userAnswerService
          .apiUserAnswerPut({
            body: {
              sectionContentQuizId: this.data.quizData.id,
              answer: this.formGroup.value.answer,
              id: this.userAnswer.id,
            },
          })
          .subscribe((value) => {
            this.getUserAnswer();
          });
      }
    } else {
      this.fileService
        .apiFileUserAnswerSectionContentQuizIdPost({
          sectionContentQuizId: this.data.quizData.id as string,
          body: {
            file: this.formGroup.value.answer,
          },
        })
        .subscribe((value) => {
          this.getUserAnswer();
        });
    }
  };

  onDeleteAnswer = () => {
    if (!this.data.quizData.quizTypeId) {
      this.userAnswerService
        .apiUserAnswerSectionContentQuizIdUserAnswerIdDelete({
          sectionContentQuizId: this.data.quizData.id as string,
          userAnswerId: this.userAnswer.id as string,
        })
        .subscribe((value) => {
          this.getUserAnswer();
        });
    } else {
      this.fileService
        .apiFileUserAnswerSectionContentQuizIdUserAnswerIdDelete({
          sectionContentQuizId: this.data.quizData.id as string,
          userAnswerId: this.userAnswer.id as string,
        })
        .subscribe((value) => {
          this.getUserAnswer();
        });
    }
  };
}
