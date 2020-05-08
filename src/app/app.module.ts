import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheoryTestComponent } from './theory-test/theory-test.component';
import { HeaderComponent } from './header/header.component';

import {TheoryTestService} from './theory-test/theory-test.service';
import { QuestionsWrapperComponent } from './theory-test/questions-wrapper/questions-wrapper.component';
import { QuestionComponent } from './theory-test/questions-wrapper/question/question.component';
import { QuestionsReviewComponent } from './theory-test/questions-wrapper/questions-review/questions-review.component';

@NgModule({
  declarations: [
    AppComponent,
    TheoryTestComponent,
    HeaderComponent,
    QuestionsWrapperComponent,
    QuestionComponent,
    QuestionsReviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [TheoryTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
