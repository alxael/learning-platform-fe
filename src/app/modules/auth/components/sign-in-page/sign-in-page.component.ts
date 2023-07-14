import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/api/services';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserForLoginDto } from 'src/app/modules/api/models';
import { map } from 'rxjs';
import { Router } from '@angular/router';
import IdentityService from '../../services/identity.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  hidePassword = true;

  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private identityService: IdentityService
  ) {}

  onSubmit = (form: NgForm) => {
    if (form.valid) {
      this.authService
        .apiAuthLoginPost$Response({
          body: {
            email: form.value.email,
            password: form.value.password,
          } as UserForLoginDto,
        })
        .pipe(
          map((response) => {
            this.identityService.addToken(JSON.parse(response.body as any).token);
          })
        )
        .subscribe({
          error: (error) => {
            form.resetForm();
            this._snackBar.open(
              'An error has occured. Please ensure that your credentials are valid.',
              'Close',
              { duration: 3000 }
            );
          },
          complete: () => {
            form.resetForm();
            this.router.navigateByUrl('/feed');
          },
        });
    }
  };
}
