import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsReviewComponent } from './questions-review.component';

describe('QuestionsReviewComponent', () => {
  let component: QuestionsReviewComponent;
  let fixture: ComponentFixture<QuestionsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
