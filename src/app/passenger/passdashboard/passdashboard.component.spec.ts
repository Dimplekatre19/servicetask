import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdashboardComponent } from './passdashboard.component';

describe('PassdashboardComponent', () => {
  let component: PassdashboardComponent;
  let fixture: ComponentFixture<PassdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
