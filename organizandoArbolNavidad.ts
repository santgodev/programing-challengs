function createXmasTree(height:number, ornament:string):string{
if(height>100){
  return "num longer than permit"
}
const underLine = "_"
const maxWithd= ((height-1) * 2)+1
let chainCharacter: string = ""
let acumulator:number = 1;
for (let i:number = 0; i < height; i++){
 if(i==0){
    chainCharacter +=underLine.repeat((maxWithd-acumulator)/2)+ornament.repeat(acumulator)+underLine.repeat((maxWithd-acumulator)/2)
  acumulator+=2;
  continue;
 }
  chainCharacter +="\n"+underLine.repeat((maxWithd-acumulator)/2)+ornament.repeat(acumulator)+underLine.repeat((maxWithd-acumulator)/2)
 // chainCharacter +="\n"+underLine.repeat(height-acumulator/2)+ornament.repeat(acumulator)+underLine.repeat(height-acumulator/2)
  acumulator+=2;
}
  chainCharacter +="\n"+underLine.repeat((maxWithd-1)/2)+"#".repeat(1)+underLine.repeat((maxWithd-1)/2)
  chainCharacter +="\n"+underLine.repeat((maxWithd-1)/2)+"#".repeat(1)+underLine.repeat((maxWithd-1)/2)

return chainCharacter
}

console.log(createXmasTree(6, "a"))
