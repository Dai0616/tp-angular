import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaMilanesasComponent } from './tienda-milanesas.component';

describe('TiendaMilanesasComponent', () => {
  let component: TiendaMilanesasComponent;
  let fixture: ComponentFixture<TiendaMilanesasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaMilanesasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaMilanesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
