"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let sendbutton = document.getElementById("send");
    sendbutton.addEventListener("click", sendbuttonhandler);
    let getbutton = document.getElementById("get");
    getbutton.addEventListener("click", getbuttonhandle);
    let output = document.getElementById("output");
    async function sendbuttonhandler() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisisttotaltoll2020.herokuapp.com/send";
        url += "/";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        await fetch(url);
    }
    async function getbuttonhandle() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisisttotaltoll2020.herokuapp.com/get";
        url += "/get";
        let query = new URLSearchParams(formData);
        url = url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        document.getElementById("output").innerHTML = responseText;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map