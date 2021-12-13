import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailsFormComponent } from './edit-details-form.component';

describe('EditDetailsFormComponent', () => {
  let component: EditDetailsFormComponent;
  let fixture: ComponentFixture<EditDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
