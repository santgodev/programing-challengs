type Inventory = Array<
  { name: string, quantity: number, category: string }
>

interface NameQuantity {
  name: string;
  quantity: number;
}

const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]


function organizeInventory(inventory: Inventory) {
  

const categoriesNotRepeated: string[] = [
  ...new Set(inventory.map(item => item.category))
];



function filterInventoryByCategorie(category:string){
  return inventory.filter((inventory)=>inventory.category==category)
}


function ConvertInventoryToNameQuantity (inventory2:Inventory){
const nameAndQuantity : Array<NameQuantity> = inventory2.map((item)=>{
const {name, quantity} = item;
return {name, quantity}
})
return nameAndQuantity;
}

function getInventoryNotRepeted (inventory:Inventory):Inventory{
const arrayNamesQuantityNotRepeted : Inventory = [];
inventory.forEach((item, i)=>{
  if(i===0){arrayNamesQuantityNotRepeted.push(item); return;}
  for (let index = 0; index < arrayNamesQuantityNotRepeted.length; index++) {
    if( item.name == arrayNamesQuantityNotRepeted[index].name ){
      arrayNamesQuantityNotRepeted[index].quantity+=item.quantity
      break;
    }
    if(arrayNamesQuantityNotRepeted.length == index+1){
      arrayNamesQuantityNotRepeted.push(item);
      break;
    }
  } 
})
return arrayNamesQuantityNotRepeted;
}


function nameAndQuantityByCategorie(){
  let objConverted = categoriesNotRepeated.map((category)=>{
    let objFiltred: Inventory = filterInventoryByCategorie(category);
    let inventoryNotRepeted : Inventory = getInventoryNotRepeted(objFiltred)
    let intoryNameQuantityNotRepeted = ConvertInventoryToNameQuantity(inventoryNotRepeted);
    return intoryNameQuantityNotRepeted
    
  }) 
  return objConverted;
}
console.log(nameAndQuantityByCategorie())








  
}

organizeInventory(inventory)
