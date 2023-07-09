import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { _MatQuillBase } from '../../directives/mat-quill-base.directive';

let nextUniqueId = 0;

const SELECTOR = 'mat-quill';

@Component({
  selector: SELECTOR,
  exportAs: 'matQuill',
  templateUrl: './mat-quill.component.html',
  styleUrls: ['./mat-quill.component.scss'],
  inputs: ['disabled'],
  providers: [{ provide: MatFormFieldControl, useExisting: MatQuill }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatQuill extends _MatQuillBase {
  controlType = SELECTOR;
  @HostBinding() id = `${SELECTOR}-${nextUniqueId++}`;

  static override ngAcceptInputType_disabled: boolean | string | null | undefined;
  static override ngAcceptInputType_required: boolean | string | null | undefined;
}
