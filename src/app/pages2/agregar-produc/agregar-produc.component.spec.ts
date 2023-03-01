import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProducComponent } from './agregar-produc.component';

describe('AgregarProducComponent', () => {
  let component: AgregarProducComponent;
  let fixture: ComponentFixture<AgregarProducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarProducComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
