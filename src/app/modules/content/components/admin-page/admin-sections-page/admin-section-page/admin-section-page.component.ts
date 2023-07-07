import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-section-page',
  templateUrl: './admin-section-page.component.html',
  styleUrls: ['./admin-section-page.component.scss']
})
export class AdminSectionPageComponent {
  id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
