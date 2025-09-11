/*
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

*/

//revisar en orden del reloj empezando por las 3

function detectBombs(grid: boolean[][]): number[][] {
    let matriz2D: number[][] = [];
    for(let i:number = 0; i<grid.length; i++){
      matriz2D[i]=[];
          for(let d:number = 0; d<grid[i].length; d++){
            let count :number = 0;
            //--------------------------
              if(d>0){
                if(grid[i][d-1]==true){
                    count+=1
                }
                if(i>0){
                  if(grid[i-1][d-1]==true){
                    count+=1
                  }
                }
                if(i<grid.length-1){
                  if(grid[i+1][d-1]==true){
                    count+=1
                  }
                }

              }

            //---------------------------
              if(i>0){
                if(grid[i-1][d]==true){
                  count+=1
                }
              }

            //---------------------------

              if(d<grid[0].length){
                 if(i>0){
                  if(grid[i-1][d+1]==true){
                    count+=1
                  }
                }

                if(grid[i][d+1]==true){
                  count+=1
                }
                                                                                           

                if(i<grid.length-1){

                  if(grid[i+1][d+1]==true){
                  count+=1
                }    
              }
            }

            //---------------------------
              if(i<grid.length-1){
                if(grid[i+1][d]==true){
                  count+=1
                }  
              }
              matriz2D[i][d]=count;
              }



    }

  return matriz2D
}
console.log(
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
