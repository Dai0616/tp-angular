import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaNosotrosComponent } from './tienda-nosotros.component';

describe('TiendaNosotrosComponent', () => {
  let component: TiendaNosotrosComponent;
  let fixture: ComponentFixture<TiendaNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaNosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
