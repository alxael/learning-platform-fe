import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionContentDto } from 'src/app/modules/api/models';
import { SectionContentService } from 'src/app/modules/api/services';
import { ThemeService } from 'src/app/modules/core/services/theme.service';
import { MatQuill } from 'src/app/modules/material/components/mat-quill/mat-quill.component';

@Component({
  selector: 'app-admin-section-content-edit-dialog',
  templateUrl: './admin-section-content-edit-dialog.component.html',
  styleUrls: ['./admin-section-content-edit-dialog.component.scss'],
})
export class AdminSectionContentEditDialogComponent {
  matches = false;
  darkTheme = false;
  formGroup = new FormGroup({
    title: new FormControl(this.data.sectionContentData.title, [
      Validators.required,
    ]),
    content: new FormControl(this.data.sectionContentData.content, [
      Validators.required,
    ]),
    orderNumber: new FormControl(this.data.sectionContentData.orderNumber, [
      Validators.required,
    ]),
  });
  @ViewChild('content', {
    static: true,
  })
  editor: MatQuill;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private sectionContentService: SectionContentService,
    @Inject(MAT_DIALOG_DATA)
    public data: { sectionContentData: SectionContentDto; sectionId: string }
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
      this.sectionContentService.apiSectionSectionIdContentAdminPut({
        sectionId: this.data.sectionId,
        body: {
          sectionId: this.data.sectionId,
          id: this.data.sectionContentData.id,
          ...this.formGroup.value,
          orderNumber: this.formGroup.value.orderNumber as number,
        },
      }).subscribe((value) => {
        window.location.reload();
      });
    }
    this.formGroup.reset();
  };
}
