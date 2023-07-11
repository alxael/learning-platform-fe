import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionEditDialogComponent } from './admin-section-edit-dialog.component';

describe('AdminSectionEditDialogComponent', () => {
  let component: AdminSectionEditDialogComponent;
  let fixture: ComponentFixture<AdminSectionEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionEditDialogComponent]
    });
    fixture = TestBed.createComponent(AdminSectionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
