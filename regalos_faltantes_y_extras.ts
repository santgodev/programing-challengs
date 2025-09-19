/* fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// } */

function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
        let objReceived : Record<string, number> = {}
        let objExpected : Record<string, number> = {}
        let objMissing : Record<string, number> = {}
        let objExtra : Record<string, number> = {}
        let receivedSet: string[]= Array.from( new Set(received))
        let expectedSet: string[]= Array.from( new Set(expected))

  for(let i : number = 0; i< received.length; i++){
            let countReceived : number = 0;
      for(let d : number = 0; d< received.length; d++){
        if(received[i]==received[d]){
          countReceived++;
        }

        
    }
    objReceived[received[i]]=countReceived
  }

  for(let i : number = 0; i< expected.length; i++){
            let countExpected : number = 0;
      for(let d : number = 0; d< expected.length; d++){
         if(expected[i]==expected[d]){
          countExpected++;
        }

        
    }
    objExpected[expected[i]]=countExpected

  }  

    for(let i : number = 0; i< receivedSet.length; i++){
       
        let receivedInSet : string = receivedSet[i]
        if(!objExpected[receivedInSet]){
          objExtra[receivedInSet]=objReceived[receivedInSet]
          continue;
        }
        if(objExpected[receivedInSet]<objReceived[receivedInSet]){
          let quantityMore : number =  objReceived[receivedInSet] - objExpected[receivedInSet] 
          objExtra[receivedInSet]=quantityMore;
          continue;
        }

  } 

    for(let i : number = 0; i< expectedSet.length; i++){
       
        let expectedInSet : string = expectedSet[i]
        if(!objReceived[expectedInSet]){
          objMissing[expectedInSet]=objExpected[expectedInSet]
          continue;
        }
        if(objReceived[expectedInSet]<objExpected[expectedInSet]){
          let quantityMore : number =  objExpected[expectedInSet] - objReceived[expectedInSet] 
          objMissing[expectedInSet]=quantityMore;
          continue;
        }


  } 
  
    

  
return {
  missing: objMissing,
  extra: objExtra
}
}
  console.log(
    fixGiftList(
  ['bear', 'bear','bear', 'car','car','car','car', 'noche'],
  ['bear', 'car', 'puzzle','puzzle', 'bear', 'car', 'car', 'car', 'car']
)
  )
