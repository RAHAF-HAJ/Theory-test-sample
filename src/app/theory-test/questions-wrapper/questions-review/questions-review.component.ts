import { Component, OnInit, Input } from '@angular/core';
import {Question} from '../question.model';
@Component({
  selector: 'app-questions-review',
  templateUrl: './questions-review.component.html',
  styleUrls: ['./questions-review.component.scss']
})
export class QuestionsReviewComponent implements OnInit {
  @Input('question') quest: Question;
  @Input('questionIndex') question_index: number;
  constructor() { }

  ngOnInit() {
    console.log(this.quest);
  }

  getQuestIdAsHash() {
    return '#quest' + this.quest.id;
  }

  getQuestId() {
    return 'quest' + this.quest.id;
  }

  getQuestCardHeadId() {
    return 'head-quest-' + this.quest.id;
  }

}
