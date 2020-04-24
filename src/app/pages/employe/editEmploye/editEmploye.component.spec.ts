import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeComponent } from './editEmploye.component';

describe('EmployeComponent', () => {
  let component: EditEmployeComponent;
  let fixture: ComponentFixture<EditEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
