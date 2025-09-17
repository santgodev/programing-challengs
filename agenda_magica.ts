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
        let indexOfPhone = agentLibrary[count].phoneNumber.indexOf(phone[0])
        let phoneCountSliced = agentLibrary[count].phoneNumber.slice(indexOfPhone)
          console.log(phone)
          console.log(phoneCountSliced)
          console.log(indexOfPhone)

        if(indexOfPhone != null){
          
          for(let i:number = 0; i<phone.length; i++){
         
            if(phoneCountSliced[i]!=phone[i] ){
              break;
            }
            if(i==phone.length-1){
              name=agentLibrary[count].fullName
              address=agentLibrary[count].adddress
              quantityInAgent++;
              console.log("cumplido")

            }

          }
        }
        count++;
      }
        if(quantityInAgent == 1 && name && address){
          console.log("hola")
          return {name, address};
        }
        else{
          return null;
        }
            

  }
        let dataFinded = findInAgendaFuntion();
  return dataFinded ? dataFinded : null;

}
