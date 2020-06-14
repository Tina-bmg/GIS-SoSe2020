"use strict";
var Produkt;
(function (Produkt) {
    let warenrechner = 0;
    let _preisberechnen = 0;
    // Zahl von Blase anzeigen
    let zahlAnzeige = document.createElement("p");
    // Blase Div
    let anzahlblase = document.createElement("div");
    anzahlblase.id = "anzahlblase";
    let produkt = [];
    window.addEventListener("load", init);
    //Neu Aufgbe 1
    function init() {
        let url = "artikels.json";
        communicate(url);
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        produkt = await response.json();
        console.log("End");
        buildProducts();
    }
    function saveInLocalStorage(_inputArticle) {
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle._name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }
    function buildProducts() {
        for (let _index = 0; _index < produkt.length; _index++) {
            //Div erzeugen
            let _newDiv = document.createElement("div");
            _newDiv.setAttribute("class", "div");
            _newDiv.setAttribute("id", "produkt" + _index);
            document.getElementById("Wein")?.appendChild(_newDiv);
            //Produktbild hinzufügen +A
            let _newImg = document.createElement("img");
            _newImg.setAttribute("src", produkt[_index]._img);
            _newImg.setAttribute("alt", "produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("produkt" + _index)?.appendChild(_newImg);
            //Produktbezeichnung hinzufügen
            let _newH3 = document.createElement("h3");
            _newH3.innerHTML = produkt[_index]._name;
            document.getElementById("produkt" + _index)?.appendChild(_newH3);
            //Produkt_beschreibung hinzufügen
            let _newP = document.createElement("p");
            _newP.innerHTML = produkt[_index]._beschreibung;
            document.getElementById("produkt" + _index)?.appendChild(_newP);
            // _preis hinzufügen
            let _newPreis = document.createElement("h4");
            _newPreis.innerHTML = produkt[_index]._preis.toFixed(2) + "€";
            document.getElementById("produkt" + _index)?.appendChild(_newPreis);
            //Button hinzufügen
            let _newButton = document.createElement("button");
            _newButton.innerHTML = "Jetzt kaufen";
            document.getElementById("produkt" + _index)?.appendChild(_newButton);
            _newButton.addEventListener("click", rechner);
            _newButton.setAttribute("preis", produkt[_index]._preis.toString());
            //"Button" in Warenkorb
            _newButton.addEventListener("click", rechner);
            _newButton.setAttribute("preis", produkt[_index]._preis.toString());
            _newButton.setAttribute("name", produkt[_index]._name);
            _newButton.setAttribute("img", produkt[_index]._img);
            document.getElementById("artikel" + _index)?.appendChild(_newButton);
            document.getElementById("artikel" + _index)?.appendChild(_newButton);
            switch (produkt[_index]._kategorie) {
                case "Wein":
                    let getContainerWein = document.getElementById("Wein");
                    console.log(getContainerWein);
                    getContainerWein.appendChild(_newDiv);
                    break;
                case "Feinkost":
                    let getContainerFeinkost = document.getElementById("Feinkost");
                    getContainerFeinkost.appendChild(_newDiv);
                    break;
                default:
                    break;
            }
        }
        function rechner(_event) {
            warenrechner++;
            console.log(warenrechner);
            saveInLocalStorage(this);
            _preisberechnen += parseFloat(_event.target?.getAttribute("preis"));
            console.log(_preisberechnen.toFixed(2));
            //Blase erstellen bei min 1 Artiekl
            if (warenrechner >= 0) {
                document.getElementById("artikelBlase")?.appendChild(anzahlblase);
            }
            //Zahl in der Blase anzeigen lassen
            zahlAnzeige.innerHTML = "" + warenrechner;
            document.getElementById("anzahlblase")?.appendChild(zahlAnzeige);
        }
        //Ein und ausblenden der Kategorien Feinkost/Wein
        function handleCategoryClick(_click) {
            switch (this.getAttribute("id")) {
                case "Weinbutton":
                    Wein();
                    break;
                case "Feinkostbutton":
                    Feinkost();
                    break;
            }
            function Wein() {
                document.getElementById("Wein").style.display = "inline-grid";
                document.getElementById("Feinkost").style.display = "none";
            }
            function Feinkost() {
                document.getElementById("Feinkost").style.display = "inline-grid";
                document.getElementById("Wein").style.display = "none";
            }
        }
        //neue Varialbe + Verlinkung zu den Button
        let weinAnzeigen = document.querySelector("#Weinbutton");
        console.log(weinAnzeigen);
        weinAnzeigen.addEventListener("click", handleCategoryClick.bind(weinAnzeigen));
        let feinkostAnzeigen = document.querySelector("#Feinkostbutton");
        feinkostAnzeigen.addEventListener("click", handleCategoryClick.bind(feinkostAnzeigen));
    }
})(Produkt || (Produkt = {}));
//# sourceMappingURL=script.js.map