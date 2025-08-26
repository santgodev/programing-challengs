const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
  

]

// crear la variable "x" y "y", y dejarlas por defecto en 0, a no ser que se les de otro valor
// hacer un for de instruccines
// hacer un swich con las instrucciones
// 
function compile (instructions: string[]): number {


let obj:any = {}

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
    }
    else{
      obj[y]=obj[x]
    }
    console.log(x, y)
    break;
    case "INC":
    obj[x] += 1
    break;
    case "DEC":
    obj[x] -= 1
    break;
    case "JMP":
    if(obj[x] == 0){
      i=Number(y)
    }


    break;
  }console.log("objeto igual a:",obj)

  }


  return 0
}
compile(instructions)
