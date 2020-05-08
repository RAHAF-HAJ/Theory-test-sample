import{Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import{QuestionService} from './question.service';

@Injectable({
    providedIn: 'root'
})
export class QuestionResolver implements Resolve<any> {
  constructor(private questionService: QuestionService) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
    return this.questionService.getQuestions(route.params.id);
  }
}
