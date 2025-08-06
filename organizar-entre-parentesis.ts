function fixPackages2(packages: string): string {
//---------------------------------------------------
let positionOfCaracterLeft = packages.indexOf("(")
let positionOfCaracterRigth = packages.lastIndexOf(")")
let packageSliced = packages.slice(positionOfCaracterLeft+1,positionOfCaracterRigth)
console.log("package sliced :"+packageSliced)
console.log("package :"+packages)

if(!packages.includes("(")){
    return packages
}

let word = fixPackages2(packageSliced) 
let stringReversed = "";


 for(let i:number = word.length-1; i>=0;i-- )
        {
            stringReversed+=word[i];
        }
console.log("reverse word after that : "+stringReversed)

let finalString :string = packages.slice(0, positionOfCaracterLeft) + stringReversed + packages.slice(positionOfCaracterRigth+1)

return finalString  

}
console.log("console log :"+fixPackages2("(hola(cruel)mundo)"))





