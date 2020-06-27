"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let buttonjson = document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", jbutton);
    let buttonhtml = document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", handlehtml);
    async function jbutton() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisisttotaltoll2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
    async function handlehtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisisttotaltoll2020.herokuapp.com";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let serverantwort = document.getElementById("server");
        serverantwort.innerHTML = responseText;
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map