import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBTableComponent } from './child-b-table.component';

describe('ChildBTableComponent', () => {
  let component: ChildBTableComponent;
  let fixture: ComponentFixture<ChildBTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildBTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildBTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
