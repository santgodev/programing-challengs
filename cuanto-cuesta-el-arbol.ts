/*
*: Copo de nieve - Valor: 1
o: Bola de Navidad - Valor: 5
^: Arbolito decorativo - Valor: 10
#: Guirnalda brillante - Valor: 50
@: Estrella polar - Valor: 100
*/

// crear for que recorra el arbol y haga conteo

function calculatePrice(ornaments: string): number | undefined {
  let total = 0;

  for (let i = 0; i < ornaments.length; i++) {
    let nextValue = 0;
    let valueOfIndex = 0;

    if (!(ornaments[i]=="*" || ornaments[i]=="o" || ornaments[i]=="^" || ornaments[i]=="#" || ornaments[i]=="@")){
      return undefined
    }
    if (ornaments[i] == "*") {
      valueOfIndex = 1;
    }
    if (ornaments[i] == "o") {
      valueOfIndex = 5;
    }
    if (ornaments[i] == "^") {
      valueOfIndex = 10;
    }
    if (ornaments[i] == "#") {
     valueOfIndex = 50;

    }
    if (ornaments[i] == "@") {
      valueOfIndex = 100;
    }

 
    //-------------------------------------------
    if(i < ornaments.length-1){

     if (ornaments[i+1] == "*") {
      nextValue = 1;
    }
    if (ornaments[i+1] == "o") {
      nextValue = 5;
    }
    if (ornaments[i+1] == "^") {
      nextValue = 10;
    }
    if (ornaments[i+1] == "#") {
      nextValue = 50;
    }
    if (ornaments[i+1] == "@") {
      nextValue = 100;
    }
    }
    if(valueOfIndex < nextValue){
      total-=valueOfIndex
    }
    else{
      total+=valueOfIndex
    }


    console.log("total = ",total,"index value= ", valueOfIndex, "next value =", nextValue);

  }

  return total;
}

console.log(calculatePrice("*o"));
