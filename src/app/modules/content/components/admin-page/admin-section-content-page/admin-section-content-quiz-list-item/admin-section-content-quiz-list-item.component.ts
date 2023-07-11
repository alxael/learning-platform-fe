import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
  MatExpansionPanelDefaultOptions,
} from '@angular/material/expansion';
import { SectionContentQuizDto } from 'src/app/modules/api/models';
import { AdminSectionContentQuizEditDialogComponent } from '../admin-section-content-quiz-edit-dialog/admin-section-content-quiz-edit-dialog.component';
import { AdminSectionContentQuizDeleteDialogComponent } from '../admin-section-content-quiz-delete-dialog/admin-section-content-quiz-delete-dialog.component';

export const myOptions: MatExpansionPanelDefaultOptions = {
  collapsedHeight: '4rem',
  expandedHeight: '',
  hideToggle: false,
};

@Component({
  selector: 'app-admin-section-content-quiz-list-item',
  templateUrl: './admin-section-content-quiz-list-item.component.html',
  styleUrls: ['./admin-section-content-quiz-list-item.component.scss'],
  providers: [
    {
      provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
      useValue: myOptions,
    },
  ],
})
export class AdminSectionContentQuizListItemComponent {
  matches = false;
  @Input() orderNumber: number;
  @Input() sectionContentId: string | null;
  @Input() quizData: SectionContentQuizDto;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onSectionContentQuizEditClick = () => {
    const dialogRef = this.dialog.open(
      AdminSectionContentQuizEditDialogComponent,
      {
        width: 'clamp(25rem, 75%, 75rem)',
        data: {
          quizData: this.quizData,
          sectionContentId: this.sectionContentId,
        },
        disableClose: true,
      }
    );
  };

  onSectionContentQuizDeleteClick = () => {
    const dialogRef = this.dialog.open(
      AdminSectionContentQuizDeleteDialogComponent,
      {
        width: 'clamp(25rem, 60%, 50rem)',
        data: {
          sectionContentId: this.sectionContentId,
          sectionContentQuizId: this.quizData.id,
        },
      }
    );
  };
}
