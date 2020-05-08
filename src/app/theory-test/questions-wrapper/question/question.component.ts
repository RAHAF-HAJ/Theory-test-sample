import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Question} from '../question.model';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({
              transform: 'translateX(-180px)',
              opacity: 0
             }),
            animate('1s ease-out',
                    style({
                          transform: 'translateX(0)',
                          opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({
              transform: 'translateX(0)',
              opacity: 1
            }),
            animate('0.2s ease-in',
                    style({
                      transform: 'translateX(180px)',
                      opacity: 0
                    }
                  )
                )
          ]
        )
      ]
    )
  ]
})
export class QuestionComponent implements OnInit {
  selected_answer: number = -1;
  @Input('question') quest: Question;
  @Output() answerSelected = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSelectAnswer(answer_number: number, $event) {
    this.selected_answer = answer_number;
    this.answerSelected.emit(answer_number)
  }

}
