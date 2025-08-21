type Board = string[];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

let boardMain = [
  '······',
  '······',
  '··@···',
  '·*oo··',
  '······',
  '······'
];

function moveTrain(board: Board, mov: Movement) : Result{
  let boardMatriz: string[][] = [];
  let result : Result = "none";
  let positionAt: [index: number, indexInRow: number] = [0, 0];
  let positionDot1: [index: number, indexInRow: number] = [0, 0];
  let positionDot2: [index: number, indexInRow: number] = [0, 0];
  let positionOfFruit: [index: number, indexInRow: number] = [0, 0];

  // Crear matriz y detectar posiciones
  for (let x: number = 0; x < board.length; x++) {
    boardMatriz.push([]);
    for (let y: number = 0; y < board[0].length; y++) {
      if (board[x][y] == '@') { positionAt = [x, y]; }
      if (board[x][y] == '*') { positionOfFruit = [x, y]; }
      boardMatriz[x][y] = board[x][y];
    }
  }

  // Buscar Dot1
  if (positionAt[1] > 0) {
    if (boardMatriz[positionAt[0]][positionAt[1] - 1] == "o") {
    positionDot1 = [positionAt[0], positionAt[1] - 1];
    }
  }
  if (positionAt[1] < boardMatriz[0].length) {
    if (boardMatriz[positionAt[0]][positionAt[1] + 1] == "o") {
    positionDot1 = [positionAt[0], positionAt[1] + 1];
    }
  }         

  if (positionAt[0] > 0) {
    if (boardMatriz[positionAt[0] - 1][positionAt[1]] == "o") {
      positionDot1 = [positionAt[0] - 1, positionAt[1]];
    }
  }
  if (positionAt[0] < boardMatriz.length -1) {
    if (boardMatriz[positionAt[0] + 1][positionAt[1]] == "o") {
      positionDot1 = [positionAt[0] + 1, positionAt[1]];
    }
  }

  // Buscar Dot2
  if (positionDot1[1] > 0) {
    if (boardMatriz[positionDot1[0]][positionDot1[1] - 1] == "o") {
    positionDot2 = [positionDot1[0], positionDot1[1] - 1];
    }
  }

  if (positionDot1[1] < boardMatriz[0].length) {
    if (boardMatriz[positionDot1[0]][positionDot1[1] + 1] == "o") {
    positionDot2 = [positionDot1[0], positionDot1[1] + 1];
    }
  }
  if (positionDot1[0] > 0) {
    if (boardMatriz[positionDot1[0] - 1][positionDot1[1]] == "o") {
      positionDot2 = [positionDot1[0] - 1, positionDot1[1]];
    }
  }

  if (positionDot1[0] < boardMatriz.length - 1) {
  if (boardMatriz[positionDot1[0] + 1][positionDot1[1]] == "o") {
    positionDot2 = [positionDot1[0] + 1, positionDot1[1]];
    }
  }



  console.log("position @ " + positionAt);
  console.log("position Dot 1 " + positionDot1);
  console.log("position Dot 2 " + positionDot2);

  switch (mov) {
    case "U":
      if (positionAt[0] == 0) {{result = "crash"} break;}
      if (boardMatriz[positionAt[0] - 1][positionAt[1]] == "o") {result = "crash"; break;}

      boardMatriz[positionAt[0] - 1][positionAt[1]] = "@";
      boardMatriz[positionAt[0]][positionAt[1]] = "o";
      boardMatriz[positionDot2[0]][positionDot2[1]] = "·";
      break;

    case "D":
      if (positionAt[0]==boardMatriz.length-1) {result = "crash"; break;}
      if (boardMatriz[positionAt[0] + 1][positionAt[1]] == "o") {result = "crash"; break;}

      boardMatriz[positionAt[0] + 1][positionAt[1]] = "@";
      boardMatriz[positionAt[0]][positionAt[1]] = "o";
      boardMatriz[positionDot2[0]][positionDot2[1]] = "·";
      break;

    case "L":
      if (positionAt[1] == 0) {result = "crash"; break;}
      if (boardMatriz[positionAt[0]][positionAt[1] - 1] == "o") {result = "crash"; break;}

      boardMatriz[positionAt[0]][positionAt[1] - 1] = "@";
      boardMatriz[positionAt[0]][positionAt[1]] = "o";
      boardMatriz[positionDot2[0]][positionDot2[1]] = "·";
      break;

    case "R":
      if (positionAt[1] == boardMatriz[0].length - 1){ result = "crash"; break;}
      if (boardMatriz[positionAt[0]][positionAt[1] + 1] == "o") {result = "crash"; break;}

      boardMatriz[positionAt[0]][positionAt[1] + 1] = "@";
      boardMatriz[positionAt[0]][positionAt[1]] = "o";
      boardMatriz[positionDot2[0]][positionDot2[1]] = "·";
      break;

  }
  for (let x: number = 0; x < board.length; x++) {
    for (let y: number = 0; y < board[0].length; y++) {
      if (boardMatriz[x][y] == '@') { positionAt = [x, y]; }
    }
  }
  if(positionAt[0]==positionOfFruit[0] && positionAt[1]==positionOfFruit[1]) result = "eat";
  
  

  console.log("-------------------------");

  const str: string[] = [];
  boardMatriz.forEach((row) => {
    let rowString: string = row.join('');
    str.push(rowString);
    console.log(rowString);
  });

  boardMain = str;
  return result;
}
