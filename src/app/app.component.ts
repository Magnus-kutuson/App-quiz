import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-quiz';


  constructor(private dataService: DataService){
    this.dataService.getData().subscribe((res: any) =>{
      alert(JSON.stringify(res))
    })
  }
}
