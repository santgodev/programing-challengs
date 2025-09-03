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

let str: string = "LLLR!LLL";

function isRobotBack(moves: string): true | [number, number] {
  type Coord = [number, number];

  let board: Coord[] = [[0, 0]]; 
  let realMove: string = "";

  for (let i: number = 0; i < moves.length;) {
    let [x, y] = board[i];

    if (moves[i] == "L") {
      board.push([x, y - 1]);
    }
    if (moves[i] == "R") {
      board.push([x, y + 1]);
    }
    if (moves[i] == "U") {
      board.push([x - 1, y]);
    }
    if (moves[i] == "D") {
      board.push([x + 1, y]);
    }
    if (moves[i] == "*") {
    }
    if (moves[i] == "!") {
      if (moves[i+1] == "L") {
        board.push([x, y + 1]);
      }
      if (moves[i+1] == "R") {
        board.push([x, y - 1]);
      }
      if (moves[i+1] == "U") {
        board.push([x + 1, y]);
      }
      if (moves[i+1] == "D") {
        board.push([x - 1, y]);
      }
      i+1;
    }
    if (moves[i] == "?") {
    }
    i++;
        console.log("x = ", x, "y = ", y);

  }
  
  return true;
}

isRobotBack(str);
