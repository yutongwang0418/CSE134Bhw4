export function clickYes(){
    document.getElementById("out1").innerHTML = "confirm result: true";
}

export function clickNo(){
    document.getElementById("out1").innerHTML = "confirm result: false"
}

export function clickFinish(){
    let inputBox1 = document.querySelector("#inp1");
    let item1 = inputBox1.value;
    // document.getElementById("out1").innerHTML = `Your name is: ${item1}`;
    if(item1 === "") {
        document.getElementById("out1").innerHTML = "User did not enter anything";
    }
    else {
        let clean1 = DOMPurify.sanitize(item1);
        document.getElementById("out1").innerHTML = `Your name is: ${clean1}`;
    }
}