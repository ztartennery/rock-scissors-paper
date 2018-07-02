var hand = document.getElementById("hand");
var fist = document.getElementById("fist");
var scissors = document.getElementById("scissors");
var number;
var result = document.getElementById("winlose");



TweenMax.set(".popup-right", { autoAlpha: 0 });
TweenMax.set(".popup-left", { autoAlpha: 0 });
console.log('set hidden');


hand.addEventListener("click", function() {
    reset();
    TweenMax.to("#popup-hand-left", 1, { autoAlpha: 1 });
    TweenMax.from("#popup-hand-left", 1, { x: -100 });
    opponent();
    if (number == 2) { result.innerText = "WIN!!"; } else if (number == 3) { result.innerText = "LOSE!!"; } else { result.innerText = "STANDOFF!!"; }
});

fist.addEventListener("click", function() {
    reset();
    TweenMax.to("#popup-fist-left", 1, { autoAlpha: 1 });
    TweenMax.from("#popup-fist-left", 1, { x: -100 });
    opponent();
    if (number == 3) { result.innerText = "WIN!!"; } else if (number == 1) { result.innerText = "LOSE!!"; } else { result.innerText = "STANDOFF!!"; }
});

scissors.addEventListener("click", function() {
    reset();
    TweenMax.to("#popup-scissors-left", 1, { autoAlpha: 1 });
    TweenMax.from("#popup-scissors-left", 1, { x: -100 });
    opponent();
    if (number == 1) { result.innerText = "WIN!!"; } else if (number == 2) { result.innerText = "LOSE!!"; } else { result.innerText = "STANDOFF!!"; }
});




function reset() {
    TweenMax.set(".popup-right", { autoAlpha: 0 });
    TweenMax.set(".popup-left", { autoAlpha: 0 });
    number = Math.floor((Math.random() * 3) + 1);
}




function opponent() {
    if (number == 1) {

        TweenMax.to("#popup-hand-right", 1, { autoAlpha: 1 });
        TweenMax.from("#popup-hand-right", 1, { x: 100 });

    }
    if (number == 2) {

        TweenMax.to("#popup-fist-right", 1, { autoAlpha: 1 });
        TweenMax.from("#popup-fist-right", 1, { x: 100 });

    }
    if (number == 3) {

        TweenMax.to("#popup-scissors-right", 1, { autoAlpha: 1 });
        TweenMax.from("#popup-scissors-right", 1, { x: 100 });
    }
}