/*
definir los movimientos 
L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
*/

/*
definir los modificadores
*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
*/

let str: string = "LLLU?L";

function isRobotBack(moves: string): true | [number, number] {
  type Coord = [number, number];

  let board: Coord[] = [[0, 0]]; 
  let history: string[] = []; 

  for (let i: number = 0; i < moves.length;) {
    let [x, y] = board[board.length-1];

    if (moves[i] == "L") {
      history.push("L");
      board.push([x - 1, y ]);
    }
    if (moves[i] == "R") {
      history.push("R");
      board.push([x + 1, y]);
    }
    if (moves[i] == "U") {
      history.push("U");
      board.push([x , y + 1]);
    }
    if (moves[i] == "D") {
      history.push("D");
      board.push([x , y - 1]);
    }
    if (moves[i] == "*") {

      if (moves[i+1] == "L") {
        history.push("L");
        board.push([x - 2, y ]);
      }
      if (moves[i+1] == "R") {
        history.push("R");
        board.push([x + 2, y]);
      }
      if (moves[i+1] == "U") {
        history.push("U");
        board.push([x, y + 2]);
      }
      if (moves[i+1] == "D") {
        history.push("D");
        board.push([x, y - 2]);
      }
      i++;
      
    }
    if (moves[i] == "!") {
      if (moves[i+1] == "L") {
        history.push("R");
        board.push([x + 1, y]);
      }
      if (moves[i+1] == "R") {
        history.push("L");
        board.push([x -1, y]);
      }
      if (moves[i+1] == "U") {
        history.push("D");
        board.push([x, y - 1]);
      }
      if (moves[i+1] == "D") {
        history.push("U");
        board.push([x, y + 1]);
      }
      i++;
    }
    if (moves[i] == "?") {
      let isPresent : boolean = false;
      for(let g:number = 0; g<history.length;g++){
       if( history[g]==moves[i+1]){
        isPresent = true;
        i++;
        break;
       }
      }
      if(!isPresent){
        if (moves[i+1] == "L") {
        history.push("L");
        board.push([x - 1, y]);
        }
        if (moves[i+1] == "R") {
        history.push("R");
        board.push([x + 1, y]);
        }
        if (moves[i+1] == "U") {
        history.push("U");
        board.push([x, y + 1]);
        }
        if (moves[i+1] == "D") {
        history.push("D");
        board.push([x, y - 1]);
      }
      i++;
       }

    }
      i++;
  }

  
  if(board[board.length-1][0] == board[0][0] && board[board.length-1][1] == board[0][1] ){
    return true
  }
  return board[board.length-1]

}


isRobotBack(str);
