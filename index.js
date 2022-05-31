// for button click using mouse
let lenOfDrumButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < lenOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this);
    let buttonLetter = this.textContent;
    makeSound(buttonLetter);
    buttonAnimation(buttonLetter);
  });
}

// for keyboard key press
document.addEventListener("keydown", function (event) {
  console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

//common for both 'button click' and 'keyboard key press'
function makeSound(key) {
  switch (key) {
    case "w":
      var audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;
    case "a":
      var audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
    case "s":
      var audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;
    case "d":
      var audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;
    case "j":
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "k":
      var audioKick = new Audio("sounds/kick-bass.mp3");
      audioKick.play();
      break;
    case "l":
      var audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    default:
      console.log("You pressed unavailable key: " + key);
      console.log("OR wrong click occured.");
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  document.body.classList.add("modify-body");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
    document.body.classList.remove("modify-body");
  }, 120);
}
