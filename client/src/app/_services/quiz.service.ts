import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quiz } from '../_models/quiz';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = environment.apiUrl;
  quizqs: Quiz[] = [];

  constructor(private http: HttpClient) { }

  getQuizQuestions(){
    if (this.quizqs.length > 0) return of(this.quizqs);
    return this.http.get<Quiz[]>(this.baseUrl + 'quiz').pipe(
      map(quizqs => {
        this.quizqs = quizqs;
        return quizqs;
      })
    )
  }

  getQuizQuestion(id: number) {
    const quizqs = this.quizqs.find(x => x.id === id);
    if (quizqs !== undefined) return of(quizqs);
    return this.http.get<Quiz>(this.baseUrl + 'quiz/' + id);
  }

}
