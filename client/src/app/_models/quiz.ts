import { IncorrectAnswer } from './incorrectanswer';

export interface Quiz {
    id: number;
    question: string;
    correct: string;
    incorrect: IncorrectAnswer[];
  }