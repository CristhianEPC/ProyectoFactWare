import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadousuariosComponent } from './listadousuarios.component';

describe('ListadousuariosComponent', () => {
  let component: ListadousuariosComponent;
  let fixture: ComponentFixture<ListadousuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadousuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadousuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
