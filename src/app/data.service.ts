import { Injectable } from '@angular/core';
import * as JsonData  from './data.json'
import { Data } from './data'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: Data[]= JsonData.quizzes

  getData(){
    return this.data 
  }
}
