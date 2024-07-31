// this function takes a number and shows you the individual results of multiplying it by 1 through 10 
function timesTables(num){
    for (let i = 1; i <=10; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

// this is an example of using it
timesTables(9);

// html setup?
const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)