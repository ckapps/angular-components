import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CkadCardModule } from '../card/card.module';
import {
  CkadFlipCardComponent,
  CkadFlipCardBackDirective,
  CkadFlipCardFrontDirective,
} from './components/flip-card/flip-card.component';

@NgModule({
  declarations: [
    CkadFlipCardComponent,
    CkadFlipCardBackDirective,
    CkadFlipCardFrontDirective,
  ],
  exports: [
    CkadFlipCardComponent,
    CkadFlipCardBackDirective,
    CkadFlipCardFrontDirective,
  ],
  imports: [CommonModule, CkadCardModule],
})
export class CkadCardStackModule {}
