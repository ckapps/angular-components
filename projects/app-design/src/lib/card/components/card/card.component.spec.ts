import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkadCardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CkadCardComponent;
  let fixture: ComponentFixture<CkadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CkadCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
