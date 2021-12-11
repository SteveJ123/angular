import { Component, OnInit, Input,  EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input("takevalue") public test:any;

@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("test", this.test);
  }

  triggerEvent(){
    this.childEvent.emit("value from child component")
  }

 
}
