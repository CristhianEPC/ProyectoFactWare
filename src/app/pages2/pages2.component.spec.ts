import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pages2Component } from './pages2.component';

describe('Pages2Component', () => {
  let component: Pages2Component;
  let fixture: ComponentFixture<Pages2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pages2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pages2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
