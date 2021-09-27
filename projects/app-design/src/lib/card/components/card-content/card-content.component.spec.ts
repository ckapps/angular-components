import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkadCardContentComponent } from './card-content.component';

describe('CardContentComponent', () => {
  let component: CkadCardContentComponent;
  let fixture: ComponentFixture<CkadCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CkadCardContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkadCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
