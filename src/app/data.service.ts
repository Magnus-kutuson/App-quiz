import { Injectable } from '@angular/core';
import * as JsonData  from './data.json'
import { Data, Questions } from './data'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[]= JsonData.quizzes;
  // questions:Questions[]=JsonData.quizzes

  getData(): Data[]{
    return this.data 
  }

}
