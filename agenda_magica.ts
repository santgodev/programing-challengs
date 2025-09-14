

// 1. Separar numeros desde el +, hasta el espacio
// 2. Encontrar los numeros entre < >

function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
            let row = agenda.split("\n")
            let agentLibrary : any= [];
      for(let d: number = 0; d<row.length; d++){
      let record : string = row[d];
      let positionOfAdd = record.indexOf("+")
      let fullName = record.slice(record.indexOf("<")+1,record.indexOf(">"))
      let phoneNumber = record.slice(positionOfAdd, positionOfAdd+15)
      let adddress = record.replace(fullName, "")
      adddress = adddress.replace("<>", "")   
      adddress = adddress.replace(phoneNumber, "")
       for(let g:number = 0; g<2; g++){
        if(adddress[0] == " ")
        {
          adddress = adddress.slice(1)
        }
        if(adddress[adddress.length-1]==" "){
          adddress = adddress.slice(0, adddress.length-1)

        }
      } 
      agentLibrary[d]={
        adddress,
        phoneNumber,
        fullName
      }  

    

  }

    function findInAgendaFuntion(){
        let quantityInAgent :number = 0;
        let name : string = "";
        let address : string = "";
        let count : number = 0;
        while(count<agentLibrary.length){
       for(let i:number = 0; i<phone.length; i++){
          if(agentLibrary[count].phoneNumber[i]!=phone[i] ){
            break;
          }
          if(i==phone.length-1){
            name=agentLibrary[count].fullName
            address=agentLibrary[count].adddress
            quantityInAgent++;

          }

        }
        if(quantityInAgent>1){
          return null;
        }
        if(name && address && count==agentLibrary.length-1){
          return {name, address}
        }
                  count++;
                 

      }
              return null;

  }
        let dataFinded = findInAgendaFuntion();
  return dataFinded ? dataFinded : null;

}
let str = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
 Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
 <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(

  findInAgenda(str, "600-987")
)

