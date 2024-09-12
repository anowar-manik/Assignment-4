function checkDigitsInName(name) {
   if(typeof name!=='string'){
    return "Invalid Input"
   }

   for(let i=0; i<name.length; i++){
    let myName = name[i];

    if(!isNaN(myName) && myName!==' '){
        return "true"
    }
   }
   return "false"

}
checkDigitsInName()
