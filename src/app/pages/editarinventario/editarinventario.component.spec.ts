import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinventarioComponent } from './editarinventario.component';

describe('EditarinventarioComponent', () => {
  let component: EditarinventarioComponent;
  let fixture: ComponentFixture<EditarinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarinventarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
