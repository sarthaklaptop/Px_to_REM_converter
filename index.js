const pxInput = document.querySelector('#px');

const remInput = document.querySelector("#rem");

const copy = document.querySelector("#copy_btn");

pxInput.addEventListener(
    "keydown",
    function(e) {
        if (e.key == "Enter") {
            if(pxInput.value !== ""){
                convert();
            }
        }
    }
)

function convert(){
    pxvalue = pxInput.value;
    pxvalue = pxvalue * 0.0625;
    console.log(pxvalue);
    remInput.value = pxvalue;
}

function copy_text(){
    navigator.clipboard.writeText(remInput.value);
}

// pxInput.addEventListener("click", toPx = () => {
//     let input = parseInt(pxInput.innerText);
//     input = input * 0.0625;
//     remInput.innerText = input;
// })

// const toPx = () => {
//     let input = parseInt(pxInput.innerText);
//     input = input * 0.0625;
//     remInput.innerText = input;
// }

// function convert() {
//     let input = parseInt(pxInput.innerText());
//     input = input * 0.0625;
//     remInput.innerText(input) 
// }


// const convert = () => {
//     let value = parseInt(pxInput);
//     // value  = (value * 0.0625);
    
//     // remInput.innerText = value;
//     console.log(value)
// }

