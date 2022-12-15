import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmoduleComponent } from './allmodule.component';

describe('AllmoduleComponent', () => {
  let component: AllmoduleComponent;
  let fixture: ComponentFixture<AllmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
