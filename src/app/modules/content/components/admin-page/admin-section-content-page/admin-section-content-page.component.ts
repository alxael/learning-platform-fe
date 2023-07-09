import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SectionContentDto } from 'src/app/modules/api/models';
import { SectionContentService } from 'src/app/modules/api/services';
import { AdminSectionContentDeleteDialogComponent } from './admin-section-content-delete-dialog/admin-section-content-delete-dialog.component';
import { AdminSectionContentAddDialogComponent } from './admin-section-content-add-dialog/admin-section-content-add-dialog.component';
import { AdminSectionContentEditDialogComponent } from './admin-section-content-edit-dialog/admin-section-content-edit-dialog.component';

@Component({
  selector: 'app-admin-section-content-page',
  templateUrl: './admin-section-content-page.component.html',
  styleUrls: ['./admin-section-content-page.component.scss'],
})
export class AdminSectionContentPageComponent {
  matches = false;
  sectionId: string | null;
  data: Observable<SectionContentDto[]>;

  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
    private sectionContentService: SectionContentService,
    public dialog: MatDialog
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.sectionId = params.get('id');
    });
    this.data =
      this.sectionContentService.apiSectionSectionIdContentAdminGet$Json({
        sectionId: this.sectionId as string,
      });
  }

  onSectionContentAddClick = () => {
    const dialogRef = this.dialog.open(AdminSectionContentAddDialogComponent, {
      width: 'clamp(25rem, 75%, 75rem)',
      data: { sectionId: this.sectionId },
      disableClose: true,
    });
  };

  onSectionContentEditClick = (data: SectionContentDto) => {
    const dialogRef = this.dialog.open(AdminSectionContentEditDialogComponent, {
      width: 'clamp(25rem, 75%, 75rem)',
      data: { sectionContentData: data, sectionId: this.sectionId },
      disableClose: true,
    });
  };

  onSectionContentDeleteClick = (sectionContentId: string | null) => {
    const dialogRef = this.dialog.open(
      AdminSectionContentDeleteDialogComponent,
      {
        width: 'clamp(25rem, 60%, 50rem)',
        data: { sectionContentId: sectionContentId, sectionId: this.sectionId },
      }
    );
  };
}
