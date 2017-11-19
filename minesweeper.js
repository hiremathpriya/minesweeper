document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row:1, col:1, isMine: false, hidden:true, isMarked: true}, // cell 1
    {row:2, col:1, isMine: true, hidden:true, isMarked: false}, // cell 2
    {row:1, col:2, isMine: false, hidden:true, isMarked: true}, // cell 3
    {row:2, col:2, isMine:true, hidden:true, isMarked: false},  // cell 4

    {row:1, col:3, isMine: false, hidden:true, isMarked: true},
    {row:2, col:3, isMine: true, hidden:true, isMarked: false},
    {row:3, col:1, isMine: false, hidden:true, isMarked: true},
    {row:3, col:2, isMine:true, hidden:true, isMarked: true},
    {row:3, col:3, isMine:true, hidden:true, isMarked: false},

  ]

};


function startGame () {

  for(var i = 0; i < board.cells.length; i++) {

    var surroundingMines = countSurroundingMines(board.cells[i]);
    board.cells[i]['surroundingMines'] = surroundingMines;

  }// Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//document.addEventListener('left-click', function(checkForWin)) {
  //document.addEventListener('right-click',function(checkForWin)){

//  }
//}
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for(i = 0; i< board.cells.length; i++) {
    if(board.cells.isMine[i] === true && board.cells.isMarked === true){
      return 'you loose';
      if(hidden === true) {
        return 'you loose';
      }


      }
    }
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:



// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
var isMine = true;
function countSurroundingMines (cell) {
var surrounding = lib.getSurroundingCells(cell.row, cell.col);

  var count = 0;
  for(var i = 0; i < surrounding.length; i++) {

    if(surrounding[i].isMine === true) {
      count = count + 1;
    }
  }
  return count;

}
