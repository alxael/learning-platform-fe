import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentEditDialogComponent } from './admin-section-content-edit-dialog.component';

describe('AdminSectionContentEditDialogComponent', () => {
  let component: AdminSectionContentEditDialogComponent;
  let fixture: ComponentFixture<AdminSectionContentEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentEditDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
