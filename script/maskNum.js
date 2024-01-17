let input = document.getElementById(`inputNum`)

function maskNum() {
    var inputLength = input.value.length
    
    
    if(inputLength == 0) {
        input.value += `(`
    } else if(inputLength == 3) {
        input.value += `) `
    } else if(inputLength == 10) {
        input.value += `-`
    }
}
