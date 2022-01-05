import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationDetailsPageComponent } from './allocation-details-page.component';

describe('AllocationDetailsPageComponent', () => {
  let component: AllocationDetailsPageComponent;
  let fixture: ComponentFixture<AllocationDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
