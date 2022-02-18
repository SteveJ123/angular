import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any;
  xIsNext: any;
  winner: any;
  gameCompleted: any;
  
  constructor() {}

  ngOnInit() {

    //only public methods should be tested
    // when run fixture.detectChanges immediately ngOninit and newgame will be executed
    //same test ts and html file
    this.newGame();   
  }

   newGame() {
    //Array(9).fill(null) = [null, null, null, null, null, null, null, null, null];
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.gameCompleted = false;
  }

  // getter method
  get player() {
    if(this.xIsNext){
      return 'X';
    }else{
      return 'O'
    }

    // return this.xIsNext ? 'X' : 'O';
  }

  //give winner combination and call detectchanges for html
  
  disableBoard(winner:any){
    if(winner){
      console.log("game completed");     
      this.gameCompleted = true;
    }
  }
//you need not write for all the movie
//one move for the X and one move for O
  makeMove(i: number) {
    if (!this.squares[i]) {     
      this.squares.splice(i, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    //this.calculateWinner() is returning 'X' or 'O'
    this.winner = this.calculateWinner();

    this.disableBoard(this.winner);
    
  }

  //for winner test case and one for not winner test case

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3,4 , 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];  //destructuring es6
      // const a = lines[i][0];
      // const b = lines[i][1];
      // const c = lines[i][2];
      if (
        this.squares[a] &&      
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
   
  }
}
