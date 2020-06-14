

namespace Produkt {

    let warenrechner: number = 0;
    let _preisberechnen: number = 0;
    // Zahl von Blase anzeigen
    let zahlAnzeige: HTMLParagraphElement = document.createElement("p");
    // Blase Div
    let anzahlblase: HTMLDivElement = document.createElement("div");
    anzahlblase.id = "anzahlblase";
    let produkt: Produkt[] = [];
    window.addEventListener("load", init);


    export interface Produkt {

        _kategorie: string;
        _img: string;
        _name: string;
        _beschreibung: string;
        _preis: number;


    }

    //Neu Aufgbe 1
    function init(): void {
        let url: string = "artikels.json";
        communicate(url);
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        console.log("Start");
        let response: Response = await fetch(_url);
        console.log("Response", response);
        produkt = await response.json();
        console.log("End");
        buildProducts();
    }



    function saveInLocalStorage(_inputArticle: Produkt): void {
        let itemString: string = JSON.stringify(_inputArticle);
        let key: string = "" + _inputArticle._name;
        localStorage.setItem(key, itemString);
        console.log(localStorage);
    }

    function buildProducts(): void {
        for (let _index: number = 0; _index < produkt.length; _index++) {
            //Div erzeugen
            let _newDiv: HTMLDivElement = document.createElement("div");
            _newDiv.setAttribute("class", "div");
            _newDiv.setAttribute("id", "produkt" + _index);
            document.getElementById("Wein")?.appendChild(_newDiv);

            //Produktbild hinzufügen +A
            let _newImg: HTMLElement = document.createElement("img");
            _newImg.setAttribute("src", produkt[_index]._img);
            _newImg.setAttribute("alt", "produkt");
            _newImg.setAttribute("class", "produktbild");
            document.getElementById("produkt" + _index)?.appendChild(_newImg);


            //Produktbezeichnung hinzufügen
            let _newH3: HTMLHeadingElement = document.createElement("h3");
            _newH3.innerHTML = produkt[_index]._name;
            document.getElementById("produkt" + _index)?.appendChild(_newH3);

            //Produkt_beschreibung hinzufügen
            let _newP: HTMLParagraphElement = document.createElement("p");
            _newP.innerHTML = produkt[_index]._beschreibung;
            document.getElementById("produkt" + _index)?.appendChild(_newP);

            // _preis hinzufügen
            let _newPreis: HTMLHeadingElement = document.createElement("h4");
            _newPreis.innerHTML = produkt[_index]._preis.toFixed(2) + "€";
            document.getElementById("produkt" + _index)?.appendChild(_newPreis);

            //Button hinzufügen
            let _newButton: HTMLButtonElement = document.createElement("button");
            _newButton.innerHTML = "Jetzt kaufen";
            document.getElementById("produkt" + _index)?.appendChild(_newButton);

            _newButton.setAttribute("preis", produkt[_index]._preis.toString());

            //"Button" in Warenkorb
            _newButton.addEventListener("click", rechner.bind(produkt[_index]));
            _newButton.setAttribute("preis", produkt[_index]._preis.toString());
            _newButton.setAttribute("name", produkt[_index]._name);
            _newButton.setAttribute("img", produkt[_index]._img);
            document.getElementById("artikel" + _index)?.appendChild(_newButton);
            document.getElementById("artikel" + _index)?.appendChild(_newButton);




            switch (produkt[_index]._kategorie) {
                case "Wein":
                    let getContainerWein: HTMLElement = document.getElementById("Wein")!;
                    console.log(getContainerWein);
                    getContainerWein.appendChild(_newDiv);
                    break;

                case "Feinkost":
                    let getContainerFeinkost: HTMLElement = document.getElementById("Feinkost")!;
                    getContainerFeinkost.appendChild(_newDiv);
                    break;
                default:
                    break;
            }
        }





        function rechner(this: Produkt, _event: Event): void {
            warenrechner++;
            console.log(warenrechner);
            saveInLocalStorage(this);
            _preisberechnen += parseFloat((<HTMLButtonElement>_event.target)?.getAttribute("preis")!);
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
        function handleCategoryClick(this: HTMLDivElement, _click: MouseEvent): void {
            switch (this.getAttribute("id")) {
                case "Weinbutton":
                    Wein();
                    break;
                case "Feinkostbutton":
                    Feinkost();
                    break;
            }
        }
        function Wein(): void {
            (<HTMLElement>document.getElementById("Wein")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("Feinkost")).style.display = "none";

        }

        function Feinkost(): void {
            (<HTMLElement>document.getElementById("Feinkost")).style.display = "inline-grid";
            (<HTMLElement>document.getElementById("Wein")).style.display = "none";

        }

        //neue Varialbe + Verlinkung zu den Button

        let weinAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#Weinbutton");
        console.log(weinAnzeigen);
        weinAnzeigen.addEventListener("click", handleCategoryClick.bind(weinAnzeigen));

        let feinkostAnzeigen: HTMLDivElement = <HTMLDivElement>document.querySelector("#Feinkostbutton");
        feinkostAnzeigen.addEventListener("click", handleCategoryClick.bind(feinkostAnzeigen));
    }





}


