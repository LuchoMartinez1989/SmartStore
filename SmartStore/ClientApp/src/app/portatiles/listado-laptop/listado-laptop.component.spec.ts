import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLaptopComponent } from './listado-laptop.component';

describe('ListadoLaptopComponent', () => {
  let component: ListadoLaptopComponent;
  let fixture: ComponentFixture<ListadoLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoLaptopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
