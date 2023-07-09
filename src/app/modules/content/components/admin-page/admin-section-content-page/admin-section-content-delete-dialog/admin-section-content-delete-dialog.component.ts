import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionContentService } from 'src/app/modules/api/services';

@Component({
  selector: 'app-admin-section-content-delete-dialog',
  templateUrl: './admin-section-content-delete-dialog.component.html',
  styleUrls: ['./admin-section-content-delete-dialog.component.scss'],
})
export class AdminSectionContentDeleteDialogComponent {
  matches = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sectionContentService: SectionContentService,
    @Inject(MAT_DIALOG_DATA)
    public data: { sectionId: string; sectionContentId: string }
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onClickConfirm = () => {
    this.sectionContentService.apiSectionSectionIdContentAdminSectionContentIdDelete(
      { ...this.data }
    ).subscribe((value) => {
      window.location.reload();
    });
  };
}
