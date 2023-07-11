import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionContentFileListItemComponent } from './admin-section-content-file-list-item.component';

describe('AdminSectionContentFileListItemComponent', () => {
  let component: AdminSectionContentFileListItemComponent;
  let fixture: ComponentFixture<AdminSectionContentFileListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionContentFileListItemComponent]
    });
    fixture = TestBed.createComponent(AdminSectionContentFileListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
