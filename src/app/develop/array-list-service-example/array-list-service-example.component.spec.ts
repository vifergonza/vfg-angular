import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayListServiceExampleComponent } from './array-list-service-example.component';

describe('ArrayListServiceExampleComponent', () => {
  let component: ArrayListServiceExampleComponent;
  let fixture: ComponentFixture<ArrayListServiceExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayListServiceExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayListServiceExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
