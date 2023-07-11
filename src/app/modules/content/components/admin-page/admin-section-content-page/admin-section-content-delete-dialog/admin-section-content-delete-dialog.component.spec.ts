import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentDeleteDialogComponent } from './admin-section-content-delete-dialog.component';

describe('AdminSectionContentDeleteDialogComponent', () => {
  let component: AdminSectionContentDeleteDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
