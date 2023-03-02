function clickBtm() {
    let b1 = document.getElementById("btn1");
    b1.addEventListener("click", () => alert("You are starting to enter your name"));

    let b2 = document.getElementById("btn2");
    b2.addEventListener("click", myConfirm);

    let b3 = document.getElementById("btn3");
    b3.addEventListener("click", myPrompt);
}

function myConfirm() {
    if (confirm("Are you sure?") ) {
        let o1 = document.getElementById("out1");
        o1.innerHTML = "confirm result: true"
    }
    else {
        let o1 = document.getElementById("out1");
        o1.innerHTML = "confirm result: false"
    }
}

function myPrompt() {
    let p1 = prompt("Please enter your name", "John Wang");
    if (p1 != null) {
        document.getElementById("out1").innerHTML = "Your name is: " + p1;
    }
    else {
        document.getElementById("out1").innerHTML = "User did not enter anything";
    }
}

clickBtm();