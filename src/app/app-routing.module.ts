import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TheoryTestComponent } from './theory-test/theory-test.component';
import { QuestionsWrapperComponent } from './theory-test/questions-wrapper/questions-wrapper.component';
import {TheoryTestResolver} from './theory-test/theory-test-resolver.service';
import { QuestionResolver } from './theory-test/questions-wrapper/question-resolver.service';

const routes: Routes = [
  { path: '', component: TheoryTestComponent, resolve: {theory_tests: TheoryTestResolver}},
  { path: 'theory-tests', component: TheoryTestComponent, resolve: {theory_tests: TheoryTestResolver} },
  { path: 'theory-tests/:id', component: QuestionsWrapperComponent, resolve: {quests: QuestionResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [QuestionResolver, TheoryTestResolver],
})
export class AppRoutingModule {}
