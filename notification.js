function sendNotification(email){
    if(email.includes('@')===false){
        return "invalid email"
    }
    
   let parts = email.split('@')
   let userName = parts[0];
   let domainName = parts[1]
   const notification = userName+' send you and email from '+domainName;
   return notification
}
console.log(sendNotification("fahim234.hotmail.com"))
