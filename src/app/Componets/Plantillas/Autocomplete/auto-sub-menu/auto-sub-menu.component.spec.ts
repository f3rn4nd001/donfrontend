import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSubMenuComponent } from './auto-sub-menu.component';

describe('AutoSubMenuComponent', () => {
  let component: AutoSubMenuComponent;
  let fixture: ComponentFixture<AutoSubMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSubMenuComponent]
    });
    fixture = TestBed.createComponent(AutoSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
