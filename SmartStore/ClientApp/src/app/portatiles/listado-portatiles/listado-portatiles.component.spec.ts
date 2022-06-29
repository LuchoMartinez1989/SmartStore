import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPortatilesComponent } from './listado-portatiles.component';

describe('ListadoPortatilesComponent', () => {
  let component: ListadoPortatilesComponent;
  let fixture: ComponentFixture<ListadoPortatilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPortatilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPortatilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
