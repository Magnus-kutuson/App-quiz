import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { Data, Questions } from '../data'; 
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-questions-page',
  imports: [CommonModule],
  templateUrl: './questions-page.component.html',
  styleUrl: './questions-page.component.css'
})
export class QuestionsPageComponent implements OnInit{
  stringOption: string[] = ['A', 'B', 'C', 'D'];
  allQuizzes: Data[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  
    this.allQuizzes = this.dataService.getData();

  }
}













































