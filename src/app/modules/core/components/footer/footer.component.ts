import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number;
  matches = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.currentYear = new Date().getFullYear();
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe(result => {
      this.matches = result.matches;
    });
  }
}
