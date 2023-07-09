import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionDeleteDialogComponent } from './admin-section-delete-dialog.component';

describe('AdminSectionDeleteDialogComponent', () => {
  let component: AdminSectionDeleteDialogComponent;
  let fixture: ComponentFixture<AdminSectionDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
