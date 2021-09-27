import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CkadCardComponent } from './components/card/card.component';
import { CkadCardActionsComponent } from './components/card-actions/card-actions.component';
import { CkadCardContentComponent } from './components/card-content/card-content.component';
import { CkadCardHeaderComponent } from './components/card-header/card-header.component';
import { CkadCardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    CkadCardComponent,
    CkadCardActionsComponent,
    CkadCardContentComponent,
    CkadCardHeaderComponent,
    CkadCardTitleComponent,
  ],
  exports: [
    CkadCardComponent,
    CkadCardActionsComponent,
    CkadCardContentComponent,
    CkadCardHeaderComponent,
    CkadCardTitleComponent,
  ],
  imports: [CommonModule],
})
export class CkadCardModule {}
