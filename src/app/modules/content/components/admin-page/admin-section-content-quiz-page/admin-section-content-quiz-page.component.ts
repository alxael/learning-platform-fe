import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin-section-content-quiz-page',
  templateUrl: './admin-section-content-quiz-page.component.html',
  styleUrls: ['./admin-section-content-quiz-page.component.scss']
})
export class AdminSectionContentQuizPageComponent {
  matches = false;
  sectionContentId: string | null;

  constructor(
    private route: ActivatedRoute,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((value) => {
      this.matches = value.matches;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.sectionContentId = params.get('id');
    });
  }
}
