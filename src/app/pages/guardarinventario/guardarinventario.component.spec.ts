import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarinventarioComponent } from './guardarinventario.component';

describe('GuardarinventarioComponent', () => {
  let component: GuardarinventarioComponent;
  let fixture: ComponentFixture<GuardarinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarinventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
