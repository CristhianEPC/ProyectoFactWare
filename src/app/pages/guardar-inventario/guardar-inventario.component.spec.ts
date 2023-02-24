import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarInventarioComponent } from './guardar-inventario.component';

describe('GuardarInventarioComponent', () => {
  let component: GuardarInventarioComponent;
  let fixture: ComponentFixture<GuardarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarInventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
