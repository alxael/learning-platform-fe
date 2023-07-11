import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSectionListItemComponent } from './admin-section-list-item.component';

describe('AdminSectionsListItemComponent', () => {
  let component: AdminSectionListItemComponent;
  let fixture: ComponentFixture<AdminSectionListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSectionListItemComponent]
    });
    fixture = TestBed.createComponent(AdminSectionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
