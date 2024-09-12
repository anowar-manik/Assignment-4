function calculateTax(income, expenses) {
    if(expenses>income ||income<0 ||expenses<0){
        return "invalid input";
       
    }
    let profit = income-expenses;
       const tax =profit*20/100
       return tax;
    
 
}
console.log(calculateTax(3000,4000))

