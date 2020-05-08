import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {Question} from './question.model';
import {QuestionService} from './question.service';
@Component({
  selector: 'app-questions-wrapper',
  templateUrl: './questions-wrapper.component.html',
  styleUrls: ['./questions-wrapper.component.scss'],
  providers: [QuestionService],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class QuestionsWrapperComponent implements OnInit {
  questions: Question[] = [];
  activated_question: number = 0;
  user_score:number = 0;
  constructor(private questionService: QuestionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      console.log(data);
      if(data.quests.status === 'SUCCESS') {
        this.questions = data.quests.object;
      }
    })
  }

  changeActiveQuestion(question_number: number, user_answer_number: number) {
    setTimeout(() => this.activated_question = question_number + 1, 1500);
    this.questions[question_number].user_answer = user_answer_number;
    if(this.questions[question_number].correct_answer === (user_answer_number + 1)) {
      this.user_score++
    }
    console.log(this.questions);
  }

  getQuestionSizerWidth() {
    let current = this.activated_question + 1;
    let total_number = this.questions.length;
    return (current / total_number) * 100;
  }
}
