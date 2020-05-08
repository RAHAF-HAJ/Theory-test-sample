import { Component, OnInit } from '@angular/core';
import {Router, Params, Data, ActivatedRoute} from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import{TheoryTest} from './theory-test.model';
import {TheoryTestService} from './theory-test.service';

@Component({
  selector: 'app-theory-test',
  templateUrl: './theory-test.component.html',
  styleUrls: ['./theory-test.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class TheoryTestComponent implements OnInit {
  theoryTests: TheoryTest[];
  constructor(private theoryTestService: TheoryTestService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data: any) => {
        if(data.theory_tests.status === 'SUCCESS') {
          this.theoryTests = data.theory_tests.object;
        }
        console.log(data);
      }
    )
  }

}
