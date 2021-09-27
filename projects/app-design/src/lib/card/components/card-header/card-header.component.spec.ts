import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CkadCardHeaderComponent } from './card-header.component';

describe('CardHeaderComponent', () => {
  let component: CkadCardHeaderComponent;
  let fixture: ComponentFixture<CkadCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CkadCardHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CkadCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
