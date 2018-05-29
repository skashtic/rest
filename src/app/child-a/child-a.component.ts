import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
  private _inputStrA;
  private _inputNumA: number;
  varA;

  @Input() inputData: string;
  @Input()
  set inputStrA(str: number) {
    this._inputStrA = str + ' setter string';
  }
  @Input()
  set inputNumA(num: number) {
    this._inputNumA = num * 3;
  }

  get funcA() {

    return 'This is funcA';
  }
  constructor() {}

  ngOnInit() {
    console.log(' inputDataA = ' + this.inputData);
    console.log(' _inputStrA = ' + this._inputStrA);
    console.log(' _inputNumA = ' + this._inputNumA);
  }
}
