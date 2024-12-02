import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { DataService } from './data.service';
import { Data } from './data';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent, QuestionsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'App-quiz';
  allQuizzes: Data[]=[]
  
dataService: DataService = inject(DataService)

ngOnInit(): void {
  this.allQuizzes = this.dataService.getData()
  console.log(this.allQuizzes)
}

}
