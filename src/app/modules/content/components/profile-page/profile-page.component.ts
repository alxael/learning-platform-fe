import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserProfileDto } from 'src/app/modules/api/models';
import { ProfileService } from 'src/app/modules/api/services';
import { EditProfileDialogComponent } from './edit-profile-dialog/edit-profile-dialog.component';
import IdentityService from 'src/app/modules/auth/services/identity.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  matches = false;
  data: Observable<UserProfileDto>;

  constructor(
    private profileService: ProfileService,
    private breakpointObserver: BreakpointObserver,
    private dialog: MatDialog
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
    this.data = this.profileService.apiProfileGet$Json();
  }

  getDate = (dateString: string | undefined) => {
    if (dateString === '0001-01-01T00:00:00' || dateString === undefined) {
      return 'None';
    }
    const date = new Date(dateString);
    return date.toLocaleDateString('en-uk');
  };

  onClickEdit = (data: UserProfileDto) => {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: 'clamp(25rem, 60%, 50rem)',
      data: data,
    });
  };
}
