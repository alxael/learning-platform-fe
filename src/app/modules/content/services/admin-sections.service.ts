import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SectionDto } from '../../api/models';
import { SectionService } from '../../api/services';

@Injectable({
  providedIn: 'root'
})
export class AdminSectionsService {
  private _sectionsList = new Subject<SectionDto[]>();
  sectionList = this._sectionsList.asObservable();

  constructor(private sectionService: SectionService) {}

  getSectionsList = () => {
    this.sectionService.apiSectionGet$Json().subscribe((value) => {
      this._sectionsList.next(value);
    })
  }
}
