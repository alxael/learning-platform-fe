import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionPageComponent } from './admin-section-page.component';

describe('AdminSectionsPageComponent', () => {
  let component: AdminSectionPageComponent;
  let fixture: ComponentFixture<AdminSectionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionPageComponent]
    });
    fixture = TestBed.createComponent(AdminSectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
