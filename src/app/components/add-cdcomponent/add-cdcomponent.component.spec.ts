import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCDComponentComponent } from './add-cdcomponent.component';

describe('AddCDComponentComponent', () => {
  let component: AddCDComponentComponent;
  let fixture: ComponentFixture<AddCDComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCDComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCDComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
