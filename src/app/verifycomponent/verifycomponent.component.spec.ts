import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifycomponentComponent } from './verifycomponent.component';

describe('VerifycomponentComponent', () => {
  let component: VerifycomponentComponent;
  let fixture: ComponentFixture<VerifycomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifycomponentComponent]
    });
    fixture = TestBed.createComponent(VerifycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
