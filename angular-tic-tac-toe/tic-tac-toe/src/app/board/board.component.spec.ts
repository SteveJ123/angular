import { ClassField } from '@angular/compiler';
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
    //create instance of class BoardComponent
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
    // const document: DebugElement = fixture.debugElement;
    // const h2Element = document.query(By.css('h2'));

    // document.getElementsByTagName('h2')
    // const h2: HTMLElement = h2Element.nativeElement;
     const h2 = fixture.nativeElement.querySelector('h2')
          
    expect(h2.textContent).toContain('Player X won the game!');

  })

  it('should execute makeMove() method', ()=>{   

    component.squares = Array(9).fill(null);
    const i = 6;
    // true is 'X'
    component.xIsNext = true;    
    component.makeMove(i);         
    expect(component.squares).toEqual([null, null, null, null, null, null, 'X', null, null]);
    expect(component.xIsNext).toBeFalse();
    
  })

  it('should execute calculateWinner() method when winner', (()=>{
    component.squares =  ['X', '0', 'X', 'O', 'X', 'X', "X", "X", "X"];
    // component.calculateWinner();
    expect(component.calculateWinner()).toBe('X');
  }))

  it('should check for not winner', (()=>{
    component.squares =  ['X', 'O', 'X'];
    // component.calculateWinner();
    expect(component.calculateWinner()).toBeNull();
  }))

});
