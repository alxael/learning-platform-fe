import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatQuill } from './mat-quill.component';

describe('MatQuillComponent', () => {
  let component: MatQuill;
  let fixture: ComponentFixture<MatQuill>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatQuill]
    });
    fixture = TestBed.createComponent(MatQuill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
