console.log("My JavaScript file is connected!");

function playSound() {
    let sound = document.getElementById("eagleSound");
    sound.currentTime = 0;
    sound.play();

    document.body.style.color = "red";
    document.querySelector("a").style.color = "red";
    document.querySelector(".buybook a").style.color = "red";
}