const instructions = [
"MOV 5 B",
  "DEC B",
  "MOV B A",
  "INC A"
]

// crear la variable "x" y "y", y dejarlas por defecto en 0, a no ser que se les de otro valor
// hacer un for de instruccines
// hacer un swich con las instrucciones
// 
function compile (instructions: string[]): number | undefined {


let obj:any = {}
let a;
for(let i : number = 0; i<instructions.length; i++){
  let row = instructions[i];
  let instruccionsRowValue =row.slice(0, 3)
  let x = ""
  let y = ""
  let lastIndexOfBlank = 0;

  if (row.length > 5){
    lastIndexOfBlank = row.lastIndexOf(" ")
    x = row.slice(4, lastIndexOfBlank )
    y = row.slice(lastIndexOfBlank+1)
  }
  else {
    x = row.slice(4,5)
  }

function esNumero(num:string) {
  return !isNaN(Number(num));
}






  
  switch(instruccionsRowValue){
    case "MOV":
    if(esNumero(x)){
      obj[y]=Number(x)
      break;
    }
    if (obj[x] == null) obj[x] = 0; 
          obj[y] = obj[x];
    console.log(x, y)
    break;
    case "INC":
    if (obj[x]==null){
      obj[x]=0;
    }
    obj[x] += 1
    break;
    case "DEC":
     if (obj[x]==null){
      obj[x]=0;
    }
    obj[x] -= 1
    break;
    case "JMP":
    if (obj[x] == null) obj[x] = 0;
    if(obj[x] == 0){
      i=Number(y) - 1
    }


    break;
  }console.log("objeto igual a:",obj)

  if(i+1 == instructions.length){
    a = obj['A'] 
  }
  }


  return a
}
compile(instructions)
