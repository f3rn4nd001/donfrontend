import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AautoUsuariosComponent } from './aauto-usuarios.component';

describe('AautoUsuariosComponent', () => {
  let component: AautoUsuariosComponent;
  let fixture: ComponentFixture<AautoUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AautoUsuariosComponent]
    });
    fixture = TestBed.createComponent(AautoUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
