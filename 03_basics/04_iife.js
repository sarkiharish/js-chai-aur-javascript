//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

/*
sometime there could be problem due to global scope pollution. 
To avoid pollution of global scope's variable or declaration we use IIFE.
*/ 


(function chai(){
    //named iife
    console.log(`DB Connected`)
})();

((userName) => {
    console.log(`DB Connected two ${userName}`)
})("Harish")