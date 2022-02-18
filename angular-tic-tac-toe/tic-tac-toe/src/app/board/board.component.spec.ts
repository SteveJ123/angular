import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute newGame() method', () =>{ 
    // Array(9).fill(null) or [null, null, null, null, null, null, null, null, null]
    // this.squares = Array(9).fill(null);
    expect(component.squares).toEqual([null, null, null, null, null, null, null, null, null]);

    // this.winner = null;
    // expect(component.winner).toBeNull()
    // expect(component.winner).toBe(null)
    expect(component.winner).toBeNull();

     // this.xIsNext = true;
    //  expect(component.xIsNext).toBeTrue();
    //expect(component.xIsNext).toBe(true);
    expect(component.xIsNext).toBe(true);

   // this. gameCompleted = false;
    expect(component.gameCompleted).toBe(false);

  })

  it('should execute disableBoard() method when winner X', ()=>{
    // const winner = 'X';
    component.winner = 'X';
    component.disableBoard(component.winner);
    expect(component.gameCompleted).toBeTrue();

    //to detect changes in html
    fixture.detectChanges();
    // By.css('h2')
    const document: DebugElement = fixture.debugElement;
    const h2Element = document.query(By.css('h2'));

    //document.getElementsByTagName('h2')
    const h2: HTMLElement = h2Element.nativeElement;
    expect(h2.textContent).toContain('Player X won the game!');

  })

  it('should execute makeMove() method', ()=>{
    //squares = [null, null, null, null, null, null, null, null, null]
    // makeMove(i: number) {
    //   if (true) {     
    //     this.squares.splice(i, 1, this.player);
    //     this.xIsNext = !this.xIsNext;
    //   }
  
    //   this.winner = this.calculateWinner();
  
    //   this.disableBoard(this.winner);
      
    // }


    component.squares = Array(9).fill(null);
    const i = 6;
    component.xIsNext = true;
    const playerValue = component.player;
    component.makeMove(i);  
    
    expect( component.squares.splice(i, 1, playerValue)).toEqual([null]);
    expect(component.xIsNext).toBeFalse();
    
  })

  it('should check for winner', (()=>{
    component.squares =  ['X', 'X', 'X'];
    // component.calculateWinner();
    expect(component.calculateWinner()).toEqual(component.squares[0]);
  }))

  it('should check for not winner', (()=>{
    component.squares =  ['X', 'O', 'X'];
    // component.calculateWinner();
    expect(component.calculateWinner()).toBeNull();
  }))

});
