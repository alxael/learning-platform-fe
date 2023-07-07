import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SectionDto } from 'src/app/modules/api/models';
import { AdminSectionsService } from '../../../services/admin-sections.service';
import { MatDialog } from '@angular/material/dialog';
import { AdminSectionAddDialogComponent } from './admin-section-add-dialog/admin-section-add-dialog.component';

@Component({
  selector: 'app-admin-sections-page',
  templateUrl: './admin-sections-page.component.html',
  styleUrls: ['./admin-sections-page.component.scss'],
})
export class AdminSectionsPageComponent {
  matches = false;
  data: Observable<SectionDto[]>;

  constructor(
    private adminSectionsService: AdminSectionsService,
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog
  ) {
    this.adminSectionsService.getSectionsList();
    this.data = this.adminSectionsService.sectionList;
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
  }

  onSectionAddClick = (parentSectionId: string | null) => {
    const dialogRef = this.dialog.open(AdminSectionAddDialogComponent, {
      width: 'clamp(25rem, 60%, 50rem)',
      data: { parentSectionId: parentSectionId },
    });
  };
}
