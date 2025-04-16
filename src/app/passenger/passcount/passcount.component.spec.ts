import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscountComponent } from './passcount.component';

describe('PasscountComponent', () => {
  let component: PasscountComponent;
  let fixture: ComponentFixture<PasscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasscountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
