import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childvalue:any;

  @Output() valuefromchildEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  valueFromChild(){
    this.valuefromchildEmitter.emit("text from child");
  }
}
