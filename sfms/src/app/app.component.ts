import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SFMS';  

  sumTwoNumbers(x:number, y:number){     
    return x + y;
  }
}
