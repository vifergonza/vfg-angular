import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfgHeaderComponent } from './vfg-header.component';

describe('VfgHeaderComponent', () => {
  let component: VfgHeaderComponent;
  let fixture: ComponentFixture<VfgHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfgHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
