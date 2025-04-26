function plus() {
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    let c = Number(a) + Number(b);
    document.getElementById("graph").textContent =
        "The Sum of the numbers is " + c;
}
function minus() {
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    let c = Number(a) - Number(b);
    document.getElementById("graph").textContent =
        "The Substractionof the numbers is " + c;
}
function multi() {
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    let c = Number(a) * Number(b);
    document.getElementById("graph").textContent =
        "The Multiplication of the numbers is " + c;
}
function div() {
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    if (b != 0) {
        let c = Number(a) / Number(b);
        document.getElementById("graph").textContent =
            "The Division of the numbers is  " + c;
    } else {
        document.getElementById("graph").textContent = "Not divisible by zero";
    }
}
function squrt() {
    let a = document.getElementById("one").value;
    let c = Math.sqrt(a);
    document.getElementById("graph").textContent =
        "The square root of the number is " + c;
}
function exp() {
    let a = document.getElementById("one").value;
    let b = document.getElementById("two").value;
    let c = Math.pow(a, b);
    document.getElementById("graph").textContent = "the answer is " + c;
}
function double() {
    let a = document.getElementById("one").value;
    let b = Number(a) * Number(a);
    document.getElementById("graph").textContent = "the Doubled value is" + b;
}
