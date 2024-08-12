//this function takes a length in inches and converts it to feet+inches

function feetAndInches(inches){
    if (typeof inches === "number"){
        return `${Math.floor(inches/12)}ft ${inches%12}in`
    }else{
        return `Please enter a number.`
    }
    
}

console.log(feetAndInches(169.5));