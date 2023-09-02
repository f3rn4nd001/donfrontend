import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPMSCComponent } from './asignar-pmsc.component';

describe('AsignarPMSCComponent', () => {
  let component: AsignarPMSCComponent;
  let fixture: ComponentFixture<AsignarPMSCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignarPMSCComponent]
    });
    fixture = TestBed.createComponent(AsignarPMSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
