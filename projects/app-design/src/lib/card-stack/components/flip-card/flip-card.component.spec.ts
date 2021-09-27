import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkadFlipCardComponent } from './flip-card.component';

describe('FlipCardComponent', () => {
  let component: CkadFlipCardComponent;
  let fixture: ComponentFixture<CkadFlipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CkadFlipCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkadFlipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
