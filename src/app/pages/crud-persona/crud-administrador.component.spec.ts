import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAdministradorComponent } from './crud-administrador.component';

describe('CrudAdministradorComponent', () => {
  let component: CrudAdministradorComponent;
  let fixture: ComponentFixture<CrudAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
