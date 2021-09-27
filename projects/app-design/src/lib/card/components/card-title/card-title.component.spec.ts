import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkadCardTitleComponent } from './card-title.component';

describe('CardTitleComponent', () => {
  let component: CkadCardTitleComponent;
  let fixture: ComponentFixture<CkadCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CkadCardTitleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkadCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
