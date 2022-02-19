/**
 * Write a JavaScript function to test if a number is a power of 2
 */

function fpowerof2(finput){
    let varinterim = finput;
    if(Math.sqrt(varinterim, 2) % 2 == 0)
    return console.log("true");
    else  
        return console.log("false");
}

fpowerof2(16);
fpowerof2(4);
fpowerof2(15);
fpowerof2(256)
fpowerof2(3);
fpowerof2(255);
fpowerof2(7);