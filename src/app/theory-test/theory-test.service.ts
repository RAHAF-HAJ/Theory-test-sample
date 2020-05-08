import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TheoryTest} from './theory-test.model';
import { environment } from '../../environments/environment';
// import { environment } from '@env/environment';
@Injectable()
export class TheoryTestService{
  url:string = environment.url;

  constructor(private http: HttpClient){};

  getTheoryTests() {
    // console.log(this.theoryTests);
    return this.http.get(this.url + '/wp-json/orfali/v1/theory-tests');
  }

  getAll() {
    return this.http.get(this.url + '/wp-json/orfali/v1/theory-tests');
  }
}
