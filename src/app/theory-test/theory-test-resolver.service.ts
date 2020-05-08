import {Injectable} from '@angular/core';
import{Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import{TheoryTestService} from './theory-test.service';

@Injectable({
  providedIn: 'root'
})
export class TheoryTestResolver implements Resolve<any> {
  constructor(private theoryTestService: TheoryTestService) {}

   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
    return this.theoryTestService.getTheoryTests();
  }
}
