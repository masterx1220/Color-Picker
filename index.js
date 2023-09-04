/* get "seed color" from color input */
function getSeedColor(){
    let seedColor = document.getElementById("color").value
    let seedArray = seedColor.split('')
    // console.log(seedArray)
    seedArray.shift()
    // console.log(seedArray)
    let hexArray = seedArray.join("")
    return hexArray
}

/* Selects mode for the color picker API */
function modeSelector(){
    let modeOption = document.getElementById("mode").value
    let mode = modeOption.toLowerCase()
    return mode
}

/* renders the colors to the DOM */
function renderColor(data){
    let colorDisplay =''
    let colorHex = ''
    for(let color of data.colors){
        colorDisplay += `
            <div class="schemeColor" style="background-color: ${color.hex.value}"></div>
        `
        colorHex += `
                <div class='schemeName'>${color.hex.value}</div>
        `
    }
    document.getElementById('schemeContainer').innerHTML = colorDisplay
    document.getElementById('schemeInfo').innerHTML = colorHex
}

/* Event listener to send the getSeedColr() and modeSelector() to the API */
document.getElementById("getColorBtn").addEventListener("click", function(e){   
    fetch(`https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&mode=${modeSelector()}`)
        .then(res => res.json())
        .then(data => renderColor(data))
    })