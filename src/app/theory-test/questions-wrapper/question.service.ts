import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {Question} from './question.model';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
  url:string = environment.url;

  constructor(private http: HttpClient,
  private activatedRoute: ActivatedRoute){};
  getQuestions(theory_test_id: number) {
    return this.http.get(this.url + '/wp-json/orfali/v1/theory-tests/' + theory_test_id);
  }
}
