import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkadCardActionsComponent } from './card-actions.component';

describe('CardActionsComponent', () => {
  let component: CkadCardActionsComponent;
  let fixture: ComponentFixture<CkadCardActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CkadCardActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkadCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
