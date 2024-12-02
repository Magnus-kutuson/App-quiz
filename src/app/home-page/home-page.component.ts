import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 
import { Data } from '../data'; 
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-home-page',
  standalone: true,  
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [CommonModule]  
})
export class HomePageComponent implements OnInit {
  allQuizzes: Data[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.allQuizzes = this.dataService.getData();
    // console.log(this.allQuizzes);  
  }
}
