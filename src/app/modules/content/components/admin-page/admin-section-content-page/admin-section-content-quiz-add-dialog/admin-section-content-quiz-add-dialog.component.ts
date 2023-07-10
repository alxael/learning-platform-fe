import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionContentQuizService } from 'src/app/modules/api/services';
import { ThemeService } from 'src/app/modules/core/services/theme.service';

@Component({
  selector: 'app-admin-section-content-quiz-add-dialog',
  templateUrl: './admin-section-content-quiz-add-dialog.component.html',
  styleUrls: ['./admin-section-content-quiz-add-dialog.component.scss'],
})
export class AdminSectionContentQuizAddDialogComponent {
  matches = false;
  darkTheme = false;
  formGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
    correctAnswer: new FormControl(null, [Validators.required]),
    quizTypeId: new FormControl(0, [Validators.required]),
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private sectionContentQuizService: SectionContentQuizService,
    @Inject(MAT_DIALOG_DATA) public data: { sectionContentId: string }
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
      this.sectionContentQuizService.apiSectionContentSectionContentIdQuizAdminPost(
        {
          sectionContentId: this.data.sectionContentId,
          body: {
            sectionContentId: this.data.sectionContentId,
            ...this.formGroup.value,
            quizTypeId: this.formGroup.value.quizTypeId as number,
          },
        }
      ).subscribe((value) => {
        window.location.reload();
      });
    }
    this.formGroup.reset();
  };
}
