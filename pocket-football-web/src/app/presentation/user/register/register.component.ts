import { Component, OnInit } from '@angular/core';
import {MonthsEnum} from '../../../data/view/months-enum';

const MIN_YEAR = 1901;
const MAX_YEAR = 2021;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  days: Array<number> = Array.from(Array(31).keys());
  months: Array<string> = Object.values(MonthsEnum);
  years: Array<number> = Array.from({length: MAX_YEAR - MIN_YEAR + 1},
    (_, i) => MAX_YEAR - i);

  constructor() { }

  ngOnInit(): void {
  }
}
