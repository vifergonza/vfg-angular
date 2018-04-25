import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownListExampleComponent } from './drop-down-list-example.component';

describe('DropDownListExampleComponent', () => {
  let component: DropDownListExampleComponent;
  let fixture: ComponentFixture<DropDownListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
