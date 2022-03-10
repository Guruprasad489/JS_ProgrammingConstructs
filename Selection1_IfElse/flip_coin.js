//function for flipcoin
function flipCoin() {
    flip = Math.floor(Math.random() * 2);  
    if (flip == 0) console.log("Head");    
     else console.log("Tail");
}
//calling function
flipCoin();