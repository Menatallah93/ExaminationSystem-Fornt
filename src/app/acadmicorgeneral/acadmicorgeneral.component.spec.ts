import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmicorgeneralComponent } from './acadmicorgeneral.component';

describe('AcadmicorgeneralComponent', () => {
  let component: AcadmicorgeneralComponent;
  let fixture: ComponentFixture<AcadmicorgeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcadmicorgeneralComponent]
    });
    fixture = TestBed.createComponent(AcadmicorgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
