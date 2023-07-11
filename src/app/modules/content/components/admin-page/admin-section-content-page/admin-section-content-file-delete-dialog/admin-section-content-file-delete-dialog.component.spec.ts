import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentFileDeleteDialogComponent } from './admin-section-content-file-delete-dialog.component';

describe('AdminSectionContentFileDeleteDialogComponent', () => {
  let component: AdminSectionContentFileDeleteDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentFileDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentFileDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentFileDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
