// Code your solutions in this file


function writeCards(names, birthday) {
    
    let messages = [];

    
    for (let name of names) {
        
        messages.push(`Thank you, ${name}, for the wonderful ${birthday} gift!`);
    }

  
    return messages;
}

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

