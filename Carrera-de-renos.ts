
function drawRace(indices: number[], length: number): string {
    let characterOfRace = "~"
    let spaces = " "
    let raceString : string = "";
    let position : number = 0;
 for(let i:number = 0; i<indices.length; i++ ){
    if(indices[i]< 0){
        position =  (indices[i]+(length))
        raceString += spaces.repeat(indices.length-(i+1)) + characterOfRace.repeat(position) + "r" +characterOfRace.repeat((length-position)-1) +" /" +(i+1)+"\n";
        continue;
    }
    if(indices[i] == 0){
        raceString += spaces.repeat(indices.length-(i+1)) + characterOfRace.repeat(length)  +" /" +(i+1)+"\n";
        continue;
        
    }

    else
        position = indices[i] 
        raceString += spaces.repeat(indices.length-(i+1)) + characterOfRace.repeat(position) + "r" +characterOfRace.repeat((length-position)-1) +" /" +(i+1)+"\n";
        continue;
 }   raceString = raceString.slice(0, raceString.length-1)
  return raceString;
}
let finalW = drawRace([0, -2, 0, 0, 9], 10)
console.log(finalW)
