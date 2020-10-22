import { Component, Input } from '@angular/core';
import { Answers } from '../quiz.model';
import { Question } from '../quiz.model';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent {
  @Input() answers: Answers;
  @Input() question: Question;
  @Input() quiz: Quiz;
}
