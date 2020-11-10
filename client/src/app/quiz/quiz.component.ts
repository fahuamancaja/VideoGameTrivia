import { Component, HostListener, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { connected, disconnect } from 'process';
import { take } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { IncorrectAnswer } from '../_models/incorrectanswer';
import { Quiz } from '../_models/quiz';
import { CounterService } from '../_services/counter.service';
import { QuizService } from '../_services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;
  quiz: Quiz;
  incorrect: IncorrectAnswer[] = [];
  
  quiz2: Quiz;
  incorrect2: IncorrectAnswer[] = [];

  quiz3: Quiz;
  incorrect3: IncorrectAnswer[] = [];

  quiz4: Quiz;
  incorrect4: IncorrectAnswer[] = [];

  quiz5: Quiz;
  incorrect5: IncorrectAnswer[] = [];

  quiz6: Quiz;
  incorrect6: IncorrectAnswer[] = [];

  quiz7: Quiz;
  incorrect7: IncorrectAnswer[] = [];

  quiz8: Quiz;
  incorrect8: IncorrectAnswer[] = [];

  quiz9: Quiz;
  incorrect9: IncorrectAnswer[] = [];

  quiz10: Quiz;
  incorrect10: IncorrectAnswer[] = [];

  arrayTest: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

  radioModel = '';
  radioModel2 = '';
  radioModel3 = '';
  radioModel4 = '';
  radioModel5 = '';
  radioModel6 = '';
  radioModel7 = '';
  radioModel8 = '';
  radioModel9 = '';
  radioModel10 = '';


  radioModelDisabled = '';
  modelGroupDisabled = false;
  clicked = false;
  clicked2 = false;
  clicked3 = false;
  clicked4 = false;
  clicked5 = false;
  clicked6 = false;
  clicked7 = false;
  clicked8 = false;
  clicked9 = false;
  clicked10 = false;
  


  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if(this.editForm.pristine) {
      $event.returnValue = true;
    }
  }

  constructor(private accountService: AccountService, 
    private toastr: ToastrService, private quizService: QuizService, public counterService: CounterService) {
      this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
   }

  ngOnInit(): void {
    this.loadAllQuestions();
  }

  loadAllQuestions()
  {
    this.loadQuestion1();
    this.loadQuestion2();
    this.loadQuestion3();
    this.loadQuestion4();
    this.loadQuestion5();
    this.loadQuestion6();
    this.loadQuestion7();
    this.loadQuestion8();
    this.loadQuestion9();
    this.loadQuestion10();
  }

  randomQuestion() {
    var num = Math.floor(Math.random() * this.arrayTest.length);
    var roll = this.arrayTest.splice(num,1);
    return roll[0];
  }

  loadQuestion1() {
    this.randomQuestion();
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz = quiz;
      this.incorrect = quiz.incorrect;
    })
  }
  loadQuestion2() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz2 = quiz;

      this.incorrect2 = this.quiz2.incorrect;
    })
  }
  loadQuestion3() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz3 = quiz;

      this.incorrect3 = this.quiz3.incorrect;
    })
  }
  loadQuestion4() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz4 = quiz;

      this.incorrect4 = this.quiz4.incorrect;
    })
  }
  loadQuestion5() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz5 = quiz;

      this.incorrect5 = this.quiz5.incorrect;
    })
  }
  loadQuestion6() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz6 = quiz;

      this.incorrect6 = this.quiz6.incorrect;
    })
  }

  loadQuestion7() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz7 = quiz;

      this.incorrect7 = this.quiz7.incorrect;
    })
  }
  loadQuestion8() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz8 = quiz;

      this.incorrect8 = this.quiz8.incorrect;
    })
  }

  loadQuestion9() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz9 = quiz;

      this.incorrect9 = this.quiz9.incorrect;
    })
  }

  loadQuestion10() {
    this.quizService.getQuizQuestion(this.randomQuestion()).subscribe(quiz => {
      this.quiz10 = quiz;

      this.incorrect10 = this.quiz10.incorrect;
    })
  }

  public getCount() {
    return this.counterService.count
  }
  public incCount(){
    this.counterService.count += 1;
  }

  reloadWindow() {
    window.location.reload();
  }

}
