import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-course-icon',
  imports: [],
  templateUrl: './course-icon.component.html',
  styleUrl: './course-icon.component.css'
})
export class CourseIconComponent {
@Input({ required: true }) selectedCategory = '';
}
