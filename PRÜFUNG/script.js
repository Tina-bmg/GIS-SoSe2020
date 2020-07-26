"use strict";
var Produkt;
(function (Produkt) {
    let warenrechner = 0;
    let preisZahler = 0;
    // Zahl von Blase anzeigen
    let zahlAnzeige = document.createElement("p");
    // Blase Div
    let anzahlblase = document.createElement("div");
    anzahlblase.id = "anzahlblase";
    let anzeigeArtikel = document.createElement("div");
    anzeigeArtikel.id = "anzeigeArtikel";
    let produkt = [];
    window.addEventListener("load", init);
    function init() {
        let url = "artikel.json";
        communicate(url);
        anzeigeArtikel = document.getElementById("vorschauArtikel");
        vorschauArtikel();
    }
    async function communicate(_url) {
        console.log("Start");
        let response = await fetch(_url);
        console.log("Response", response);
        produkt = await response.json();
        console.log("End");
        buildProducts();
    }
    function vorschauArtikel() {
        anzeigeArtikel.innerHTML = "";
        preisZahler = 0;
        for (let index = 0; index < localStorage.length; index++) {
            let key = localStorage.key(index);
            let artikeljson = localStorage.getItem(key);
            let item = JSON.parse(artikeljson);
            preisZahler += item._preis;
            vorschauanzeigeArtikel(item);
        }
    }
    function vorschauanzeigeArtikel(_inputArticle) {
        let _newDiv = document.createElement("div");
        anzeigeArtikel.appendChild(_newDiv);
        _newDiv.id = _inputArticle._name;
        console.log(_newDiv.id);
        //Namen geben
        let name = document.createElement("h3");
        _newDiv.appendChild(name);
        name.innerHTML = _inputArticle._name;
        let _price = document.createElement("p");
        _newDiv.appendChild(_price);
        _price.innerHTML = "" + _inputArticle._preis;
        _newDiv.setAttribute("preis", _price.innerHTML);
    }
    function saveinlocalstorage(_inputArticle) {
        //Artikel bauen
        let itemString = JSON.stringify(_inputArticle);
        let key = "" + _inputArticle._name; //in localstorage packen
        localStorage.setItem(key, itemString);
        console.log(localStorage);
        vorschauArtikel();
    }
    function buildProducts() {
        for (let _index = 0; _index < produkt.length; _index++) {
            //Div erzeugen
            let _newDiv = document.createElement("div");
            _newDiv.setAttribute("class", "div");
            _newDiv.setAttribute("id", "produkt" + _index);
            //Produktbild hinzufügen +A
            let _newImg = document.createElement("img");
            _newImg.setAttribute("src", produkt[_index]._img);
            _newImg.setAttribute("alt", "produkt");
            _newImg.setAttribute("class", "produktbild");
            //Produktbezeichnung hinzufügen
            let _newH3 = document.createElement("h3");
            _newH3.innerHTML = produkt[_index]._name;
            document.getElementById("produkt" + _index)?.appendChild(_newH3);
            // _preis hinzufügen
            let _newPreis = document.createElement("h4");
            _newPreis.innerHTML = produkt[_index]._preis.toFixed(2) + "€";
            document.getElementById("produkt" + _index)?.appendChild(_newPreis);
            //Button hinzufügen
            let _newButton = document.createElement("button");
            _newButton.innerHTML = "Jetzt kaufen";
            document.getElementById("produkt" + _index)?.appendChild(_newButton);
            _newButton.setAttribute("preis", produkt[_index]._preis.toString());
            //"Button" in Warenkorb
            _newButton.addEventListener("click", rechner.bind(produkt[_index]));
            _newButton.setAttribute("preis", produkt[_index]._preis.toString());
            _newButton.setAttribute("name", produkt[_index]._name);
            _newButton.setAttribute("img", produkt[_index]._img);
            document.getElementById("artikel" + _index)?.appendChild(_newButton);
            switch (produkt[_index]._kategorie) {
                case "fruchteis":
                    document.getElementById("fruchteis")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "milcheis":
                    document.getElementById("milcheis")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Soßen":
                    document.getElementById("Soßen")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Streusel":
                    document.getElementById("Streusel")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Waffeln":
                    document.getElementById("Waffeln")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
                case "Becher":
                    document.getElementById("Becher")?.appendChild(_newDiv);
                    document.getElementById("produkt" + _index)?.appendChild(_newImg);
                    document.getElementById("produkt" + _index)?.appendChild(_newH3);
                    document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                    document.getElementById("produkt" + _index)?.appendChild(_newButton);
                    break;
            }
        }
        function rechner(_event) {
            warenrechner++;
            console.log(warenrechner);
            saveinlocalstorage(this);
            preisZahler += parseFloat(_event.target?.getAttribute("preis"));
            console.log(preisZahler);
            //Blase erstellen bei min 1 Artiekl
            if (warenrechner >= 0) {
                document.getElementById("artikelBlase")?.appendChild(anzahlblase);
            }
            //Zahl in der Blase anzeigen lassen
            zahlAnzeige.innerHTML = "" + warenrechner;
            document.getElementById("anzahlblase")?.appendChild(zahlAnzeige);
        }
    }
})(Produkt || (Produkt = {}));
//# sourceMappingURL=script.js.map