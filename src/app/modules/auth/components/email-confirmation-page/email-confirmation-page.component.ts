import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/modules/api/services';

@Component({
  selector: 'app-email-confirmation-page',
  templateUrl: './email-confirmation-page.component.html',
  styleUrls: ['./email-confirmation-page.component.scss'],
})
export class EmailConfirmationPageComponent {
  loading = true;
  matches = false;
  error = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe(value => {
      this.matches = value.matches;
    })
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params['email'], params['token'])
      this.authService
        .apiAuthRegisterConfirmPost({
          body: {
            email: params['email'],
            token: params['token'],
          },
        })
        .subscribe({
          error: (error) => {
            if (error instanceof HttpErrorResponse) {
              this.error = true;
              this.loading = false;
            }
          },
        });
    });
  }
}
