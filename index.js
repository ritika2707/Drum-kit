///DETECTING BUTTON PRESS
var numberOfButtons = document.querySelectorAll("button");
for(var i=0; i<numberOfButtons.length; i++){
    numberOfButtons[i].addEventListener("click", handleClick);
}

function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}


//DETECTING KEYBOARD PRESS

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

/************************/
function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;  
            
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentButton){

    var activeButton = document.querySelector("." + currentButton);
    activeButton.classList.add("pressed");
    //removing pressed class after 0.1 second
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    
}