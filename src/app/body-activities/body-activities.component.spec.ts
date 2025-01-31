import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyActivitiesComponent } from './body-activities.component';

describe('BodyActivitiesComponent', () => {
  let component: BodyActivitiesComponent;
  let fixture: ComponentFixture<BodyActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyActivitiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
