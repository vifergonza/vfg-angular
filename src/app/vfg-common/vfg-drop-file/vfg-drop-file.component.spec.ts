import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfgDropFileComponent } from './vfg-drop-file.component';

describe('VfgDropFileComponent', () => {
  let component: VfgDropFileComponent;
  let fixture: ComponentFixture<VfgDropFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfgDropFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfgDropFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
