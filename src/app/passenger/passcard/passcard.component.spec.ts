import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscardComponent } from './passcard.component';

describe('PasscardComponent', () => {
  let component: PasscardComponent;
  let fixture: ComponentFixture<PasscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
