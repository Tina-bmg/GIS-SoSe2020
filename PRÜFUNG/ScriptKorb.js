"use strict";
var Produkt;
(function (Produkt) {
    window.addEventListener("load", init);
    let contentDiv;
    let pGesamtpreis;
    let gesamtPreis;
    function init(_event) {
        contentDiv = document.querySelector(".warenliste");
        pGesamtpreis = document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);
        console.log(localStorage);
        update();
    }
    function update() {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikeljson = localStorage.getItem(key);
            let item = JSON.parse(artikeljson);
            gesamtPreis += item._preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }
    function erstelleInhalt(_inputArticle) {
        //Div erstellen
        let _newDiv = document.createElement("div");
        contentDiv.appendChild(_newDiv);
        _newDiv.id = _inputArticle._name;
        console.log(_newDiv.id);
        //Bild erstellen
        let _bildElement = document.createElement("img");
        _newDiv.appendChild(_bildElement);
        _bildElement.src = _inputArticle._img;
        console.log(_bildElement);
        //Namen geben
        let name = document.createElement("h3");
        _newDiv.appendChild(name);
        name.innerHTML = _inputArticle._name;
        //Preis festlegen
        let _price = document.createElement("p");
        _newDiv.appendChild(_price);
        _price.innerHTML = "" + _inputArticle._preis;
        _newDiv.setAttribute("preis", _price.innerHTML);
        //Button
        let _kaufen = document.createElement("button");
        _newDiv.appendChild(_kaufen);
        _kaufen.innerHTML = "Löschen";
        _kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }
    function handleRemoveArticle(_event) {
        localStorage.removeItem(this._name);
        update();
    }
    //Gesamtpreis in Header plazieren
    function setGesamtpreis() {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + "€";
    }
    function handleRemoveAll(_event) {
        localStorage.clear();
        update();
    }
})(Produkt || (Produkt = {}));
//# sourceMappingURL=ScriptKorb.js.map