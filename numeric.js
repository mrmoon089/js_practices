/**
 * Write a JavaScript function to check to check whether a variable is numeric or not.
Test Data :
console.log(is_Numeric(12));
console.log(is_Numeric('abcd'));
console.log(is_Numeric('12'));
console.log(is_Numeric(' '));
console.log(is_Numeric(1.20));
console.log(is_Numeric(-200));
 */
function fifnumeric(varinput){
    if(typeof varinput == "number")
    return "true";
    else
        return "false";
}

console.log(fifnumeric(12));
console.log(fifnumeric(2.3));
console.log(fifnumeric("sers"));
console.log(fifnumeric(true));
console.log(fifnumeric(4,2324));





