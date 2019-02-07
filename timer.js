process.argv.shift()
process.argv.shift()

function printTime(){
    let timeLeft = parseString(process.argv[0])
    let countdown= setInterval(()=>{
        timeLeft-=1
        timeLeft===0 && clearInterval(countdown)
        process.stdout.write(`Left: ${timeLeft}s\n`)     
    }, 1000)
}

function parseString(string){
    if(string.includes('min')){
        return parseInt(string.slice(0,-3))*60
    } else {
        return parseInt(string.slice(0,-1))
    }
}

printTime()