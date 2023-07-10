import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  SectionContentQuizService,
  SectionContentService,
} from 'src/app/modules/api/services';

@Component({
  selector: 'app-admin-section-content-quiz-delete-dialog',
  templateUrl: './admin-section-content-quiz-delete-dialog.component.html',
  styleUrls: ['./admin-section-content-quiz-delete-dialog.component.scss'],
})
export class AdminSectionContentQuizDeleteDialogComponent {
  matches = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sectionContentQuizService: SectionContentQuizService,
    @Inject(MAT_DIALOG_DATA)
    public data: { sectionContentId: string; sectionContentQuizId: string }
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onClickConfirm = () => {
    console.log(this.data);
    this.sectionContentQuizService
      .apiSectionContentSectionContentIdQuizAdminSectionContentQuizIdDelete({
        ...this.data,
      })
      .subscribe((value) => {
        window.location.reload();
      });
  };
}
