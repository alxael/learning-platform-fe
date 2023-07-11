import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SectionFileDto } from 'src/app/modules/api/models';
import { AdminSectionContentFileDeleteDialogComponent } from '../admin-section-content-file-delete-dialog/admin-section-content-file-delete-dialog.component';

@Component({
  selector: 'app-admin-section-content-file-list-item',
  templateUrl: './admin-section-content-file-list-item.component.html',
  styleUrls: ['./admin-section-content-file-list-item.component.scss']
})
export class AdminSectionContentFileListItemComponent {
  matches = false;
  @Input() orderNumber: number;
  @Input() sectionContentId: string | null;
  @Input() fileData: SectionFileDto;

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onSectionContentQuizDeleteClick = () => {
    console.log(this.fileData.id);
    const dialogRef = this.dialog.open(
      AdminSectionContentFileDeleteDialogComponent,
      {
        width: 'clamp(25rem, 60%, 50rem)',
        data: {
          sectionFile: this.fileData.id
        },
      }
    );
  };
}
