import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {
  SectionContentDto,
  SectionContentQuizDto,
  SectionFileDto,
} from 'src/app/modules/api/models';
import { SectionContentService } from 'src/app/modules/api/services';
import { SectionContentQuizAnswerAddDialogComponent } from './section-content-quiz-answer-add-dialog/section-content-quiz-answer-add-dialog.component';

@Component({
  selector: 'app-section-page',
  templateUrl: './section-page.component.html',
  styleUrls: ['./section-page.component.scss'],
})
export class SectionPageComponent {
  matches = false;
  sectionTitle: string | null;
  sectionId: string | null;
  data: Observable<SectionContentDto[]>;

  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private sectionContentService: SectionContentService,
    public dialog: MatDialog
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.sectionId = params.get('id');
      this.data = this.sectionContentService.apiSectionSectionIdContentGet$Json(
        {
          sectionId: this.sectionId as string,
        }
      );
      this.sectionTitle = params.get('title');
    });
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onOpenQuizClick = (
    quizData: SectionContentQuizDto,
    sectionContentId: string | null
  ) => {
    const dialogRef = this.dialog.open(
      SectionContentQuizAnswerAddDialogComponent,
      {
        width: 'clamp(25rem, 60%, 50rem)',
        data: { quizData: quizData, sectionContentId: sectionContentId },
      }
    );
  };

  onDownloadFileClick = (fileData: SectionFileDto) => {
    window.location.href = fileData.fileUrl as string;
  };
}
