function removeSnow(s: string): string {

  let strArray : string[]=[] 
  for(let i = 0; i< s.length; i++){
    strArray.push(s[i])  

    if(strArray[strArray.length-1] == strArray[strArray.length-2]){
      strArray.pop()
      strArray.pop()
      
    }
  }
  let finalStr : string = "";
  strArray.forEach((i)=>{
    finalStr += i;
  })
    return finalStr;
}
