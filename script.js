const form = document.querySelector('form')// form only submit in two type post or get type but ewhen ever submit values goes into url or at server
// const height = parseInt(document.querySelector('#height').value) // if we run this above this form event then when ever page is loaded it automatically take the value and give empty values
form.addEventListener('submit', function(e){
    e.preventDefault() // it help to stop event from submiting values
    
   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');// whatever value is parse it will converted into integer

/// here are puting checks 
   if(height === '' || height < 0 || isNaN(height)){ // isNan is a methode to check value is not a number 
    results.innerHTML = `please give the valid height ${height}`;
   } else  if(weight === '' || weight < 0 || isNaN(weight)){ // isNan is a methode to check value is not a number 
    results.innerHTML = `please give the valid weightt ${weight}`;
   } else {
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    results.innerHTML =`<span>${bmi}</span>`; 
   }


//    please think how to display extra massage that you are under or over weight 
//    if(bmi <18.6){
//     results.innerHTML = `You are under weight${bmi}`
//    } else if(18.6 <=bmi >= 24.9){
//     results.innerHTML = `You are Normal weight`
//    }
           
});