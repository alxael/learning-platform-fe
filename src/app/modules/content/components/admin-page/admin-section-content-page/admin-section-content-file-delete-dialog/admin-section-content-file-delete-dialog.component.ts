import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileService } from 'src/app/modules/api/services';

@Component({
  selector: 'app-admin-section-content-file-delete-dialog',
  templateUrl: './admin-section-content-file-delete-dialog.component.html',
  styleUrls: ['./admin-section-content-file-delete-dialog.component.scss'],
})
export class AdminSectionContentFileDeleteDialogComponent {
  matches = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fileService: FileService,
    @Inject(MAT_DIALOG_DATA)
    public data: { sectionFileId: string }
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onClickConfirm = () => {
    this.fileService
      .apiFileAdminSectionSectionFileIdDelete({
        sectionFileId: this.data.sectionFileId,
      })
      .subscribe((value) => {
        window.location.reload();
      });
  };
}
