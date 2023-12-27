let outputColor = document.querySelector('#outputColorGuess')
let boxses = Array.from(document.querySelectorAll('.Box'))
let boxsesLength = boxses.length


function creatColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}




console.log(boxses[0].style.backgroundColor);
console.log(boxses[1].style.backgroundColor);
console.log(boxses[2].style.backgroundColor);
console.log(boxses[3].style.backgroundColor);
console.log(boxses[4].style.backgroundColor);

setColors()

outputColor.innerHTML = rightAnswer


for(let i = 0; i < boxsesLength; i++){
    boxses[i].addEventListener("click", () => {
        let boxses = document.querySelectorAll('.Box')
        console.log(boxses);
        let boxsesLength = boxses.length
        rightAnswer = boxses[Math.floor(Math.random() * 5)].style.backgroundColor
        outputColor.innerHTML = rightAnswer
        const check = () => {
            let boxses = Array.from(document.querySelectorAll('.Box'))
            
            console.log(boxses[boxses.indexOf(event.target)].style.backgroundColor);
            console.log(rightAnswer);
            console.log("ceck");
            let output2 = document.querySelector('#output2')
            
            switch(rightAnswer === boxses[boxses.indexOf(event.target)].style.backgroundColor){
                case true:output2.innerHTML = "right"
                break;
                case false:output2.innerHTML = "wrong"
                break;
            }
        }
        check()
    }
    )
}

function setColors(){
    // for( let i = 0; i < boxsesLength; i++){
    //     boxses[i].style.backgroundColor = creatColor();
    //     let boxsesColors = boxses[i].style.backgroundColor
    //     rightAnswer = boxsesColors   
    window.location.reload()  

}