import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMenuComponent } from './auto-menu.component';

describe('AutoMenuComponent', () => {
  let component: AutoMenuComponent;
  let fixture: ComponentFixture<AutoMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoMenuComponent]
    });
    fixture = TestBed.createComponent(AutoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
