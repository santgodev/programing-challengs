
function distributeWeight(weight: number): string {
  const boxRepresentations = {
  1: [" _ ", "|_|"] ,
  2: [" ___ ", "|___|"],
  5: [" _____ ", "|     |", "|_____|"],
  10: [" _________ ", "|         |", "|_________|"]
}
let arrayOfBoxes: (1 | 2 | 5 | 10)[] = [];
  for (let weighInFor: number = weight; weighInFor > 0;){
    if(weighInFor>=10){
      weighInFor-=10;
      arrayOfBoxes.push(10)
      continue;
    }
    if(weighInFor>=5){
      weighInFor-=5;
      arrayOfBoxes.push(5)
      continue;
    }
    if(weighInFor>=2){
      weighInFor-=2;
      arrayOfBoxes.push(2)
      continue;
    }
    if(weighInFor>=1){
      weighInFor-=1;
      arrayOfBoxes.push(1)
      continue;

    }

  }
  let strToReturn : string = ""
  let positionLastLine :number = 0;

  for(let i:number = arrayOfBoxes.length-1; i>=0; i-- ){
    let rowOfBox : string []= boxRepresentations[arrayOfBoxes[i]]


    for(let d = 0; d<rowOfBox.length; d++ ){
      if(i>0 && rowOfBox.length-1 == d ){
      positionLastLine = rowOfBox[d].lastIndexOf("|")



      continue;
      }
      if (i<arrayOfBoxes.length-1 && d < 1 && positionLastLine ==rowOfBox[d].length -1){
              strToReturn+="|"+"_".repeat(positionLastLine-1)+"|"+"\n"
      continue;
      }
      if(i<arrayOfBoxes.length-1 && d < 1 ){
      strToReturn+="|"+"_".repeat(positionLastLine-1)+"|"+("_".repeat(rowOfBox[d].length-positionLastLine-2))+"\n"

      continue;
      }
      strToReturn+=rowOfBox[d]+"\n"

    }
  }

  return strToReturn;
}
console.log(
distributeWeight(121))
