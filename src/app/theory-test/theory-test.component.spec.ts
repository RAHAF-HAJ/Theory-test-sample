import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheoryTestComponent } from './theory-test.component';

describe('TheoryTestComponent', () => {
  let component: TheoryTestComponent;
  let fixture: ComponentFixture<TheoryTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheoryTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheoryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
