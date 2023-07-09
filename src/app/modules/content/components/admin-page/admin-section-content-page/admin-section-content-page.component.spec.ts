import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentPageComponent } from './admin-section-content-page.component';

describe('AdminSectionContentPageComponent', () => {
  let component: AdminSectionContentPageComponent;
  let fixture: ComponentFixture<AdminSectionContentPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentPageComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
