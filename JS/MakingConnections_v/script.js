console.log("page loaded...");

function editName() {
    nametoChange.innerText = "Alana S"
}

var rem1 = document.querySelector("#remove1")
var rem2 = document.querySelector("#remove2")
var coRe = document.querySelector("#connReq")
var yoCo = document.querySelector("#youConn")

function accept1() {
    rem1.remove();
    coRe.innerText--;
    yoCo.innerText++;
}


function refuse1() {
    rem1.remove();
    coRe.innerHTML--;
}

function accept2() {
    rem2.remove();
    coRe.innerText--;
    yoCo.innerText++;
}


function refuse2() {
    rem2.remove();
    coRe.innerHTML--;
}