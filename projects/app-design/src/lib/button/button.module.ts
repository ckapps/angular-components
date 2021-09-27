import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CkadAnchorButtonComponent,
  CkadButtonComponent,
  CkadToggleButtonComponent,
} from './button.component';

@NgModule({
  declarations: [
    CkadButtonComponent,
    CkadAnchorButtonComponent,
    CkadToggleButtonComponent,
  ],
  exports: [
    CkadButtonComponent,
    CkadAnchorButtonComponent,
    CkadToggleButtonComponent,
  ],
  imports: [CommonModule],
})
export class CkadButtonModule {}
