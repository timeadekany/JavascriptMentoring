const fs = require('fs');
let inputString;
try {
     inputString = fs.readFileSync('./input.txt', 'utf8');
} catch (error) {
    console.log("File not exists"); 
    throw error;
}

if (inputString.length > 0) {
    let reverseString = "";
    for (let i = inputString.length-1; i >= 0; i--) { 
        reverseString += inputString[i]; 
    }

    try{
        fs.writeFileSync('output.txt', reverseString);
    } catch (error){
        throw error;
    } 
    
} else {
    console.log("The input file is empty");
}
