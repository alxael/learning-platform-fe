import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Inject, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SectionContentService } from 'src/app/modules/api/services';
import { ThemeService } from 'src/app/modules/core/services/theme.service';

@Component({
  selector: 'app-admin-section-content-add-dialog',
  templateUrl: './admin-section-content-add-dialog.component.html',
  styleUrls: ['./admin-section-content-add-dialog.component.scss'],
})
export class AdminSectionContentAddDialogComponent {
  matches = false;
  darkTheme = false;
  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    orderNumber: new FormControl(0, [Validators.required]),
  });
  
  constructor(
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService,
    private sectionContentService: SectionContentService,
    @Inject(MAT_DIALOG_DATA) public data: { sectionId: string }
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
      this.sectionContentService
        .apiSectionSectionIdContentAdminPost({
          sectionId: this.data.sectionId,
          body: {
            sectionId: this.data.sectionId,
            ...this.formGroup.value,
            orderNumber: this.formGroup.value.orderNumber as number,
          },
        })
        .subscribe((value) => {
          window.location.reload();
        });
    }
    this.formGroup.reset();
  };
}
