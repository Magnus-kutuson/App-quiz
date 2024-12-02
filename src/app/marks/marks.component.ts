import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CourseIconComponent } from '../course-icon/course-icon.component';
import { Data } from '../data';

@Component({
  selector: 'app-marks',
  standalone: true,
  imports: [CourseIconComponent],
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ScoreComponent {
  @Input({ required: true }) selectedCategory = '';
  @Input({ required: true }) quizzes: Data[] = [];
  @Input({ required: true }) correctAnswersCount = 0;

  @Output() quizReset = new EventEmitter<void>();

  resetQuiz() {
    this.quizReset.emit();
  }
}

