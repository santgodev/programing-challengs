type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

function moveTrain(board: Board, mov: Movement): Result {
let dot = '.';


let positionAt: [index:number, indexInRow:number] = [0, 0];
let positionDot1: [index:number, indexInRow:number] = [0, 0];
let positionDot2: [index:number, indexInRow:number] = [0, 0];
let positionOfFruit: [index:number, indexInRow:number] = [0, 0];
 
for(let i:number=0; i<board.length;i++){
  for(let d:number=0; d<board[i].length;d++){
    if(board[i][d]=='@'){positionAt=[i,d];break}
  }
}
for(let i:number=0; i<board.length;i++){
  for(let d:number=0; d<board[i].length;d++){
    if(board[i][d]=='o'){positionDot1=[i,d];break}
  }
}
 for(let i:number=board.length-1; i>=0;i--){
  for(let d:number=board[i].length-1; d>=0;d--){
    if(board[i][d]=='o'){positionDot2=[i,d];break}
  }
}  
for(let i:number=board.length-1; i<0;i++){
  for(let d:number=board[i].length-1; d>=0;d++){
    if(board[i][d]=='*'){positionOfFruit=[i,d];break}
  }
}
   switch(mov){
    case 'U':
    board[positionAt[0]-1] = dot.repeat(positionAt[1]) + '@' + dot.repeat(board[0].length-positionAt[1])
    board[positionAt[0]] = dot.repeat(positionAt[1]) + 'o' + dot.repeat(board[0].length-positionAt[1])
    board[positionDot1[0]] = dot.repeat(positionDot1[1]) + 'o' + dot.repeat(board[0].length-positionDot1[1])
    break;
    case 'D':
    break;
    case 'R':
    break;
    case 'L':
    break;
  }
 board.forEach((board)=>{
console.log(board)
 })

  return 'none';
}


moveTrain(board, 'U')
