


// Write algorightm to sort total list into recently added sdo from last added  make that front 



let totalArray = ['harry potter','hobbit','steve jobs']

let recents = []



function reverse(){
    for (let i = totalArray.length - 1; i >= 0; i--){
        recents.push(totalArray[i])
    }
}



console.log("code ran")

reverse()

console.log(recents)


