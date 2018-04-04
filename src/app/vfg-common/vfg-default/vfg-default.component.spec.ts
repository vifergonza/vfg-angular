import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfgDefaultComponent } from './vfg-default.component';

describe('VfgDefaultComponent', () => {
  let component: VfgDefaultComponent;
  let fixture: ComponentFixture<VfgDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfgDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfgDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
