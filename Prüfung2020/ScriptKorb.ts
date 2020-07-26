namespace Produkt {

    window.addEventListener("load", init);

    let contentDiv: HTMLDivElement;
    let pGesamtpreis: HTMLParagraphElement;
    let gesamtPreis: number;

    function init(_event: Event): void {
        contentDiv = <HTMLDivElement>document.querySelector(".warenliste");
        pGesamtpreis = <HTMLParagraphElement>document.querySelector("#total");
        pGesamtpreis.addEventListener("click", handleRemoveAll);
        document.getElementById("warenkorbWert")?.appendChild(pGesamtpreis);

        console.log(localStorage);
        update();
    }

    function update(): void {
        contentDiv.innerHTML = "";
        gesamtPreis = 0;
        for (let index: number = 0; index < localStorage.length; index++) {
            let key: string = <string>localStorage.key(index);
            let artikeljson: string = <string>localStorage.getItem(key);

            let item: Produkt = <Produkt>JSON.parse(artikeljson);

            gesamtPreis += item._preis;
            erstelleInhalt(item);
        }
        setGesamtpreis();
    }

 
    function erstelleInhalt(_inputArticle: Produkt): void {
      
      
          //Div erstellen
        let _newDiv: HTMLDivElement = document.createElement("div");
        contentDiv.appendChild(_newDiv);
        _newDiv.id = _inputArticle._name;
        console.log(_newDiv.id);
     
        
         //Bild erstellen
        let _bildElement: HTMLImageElement = document.createElement("img");
        _newDiv.appendChild(_bildElement);
        _bildElement.src = _inputArticle._img;
        console.log(_bildElement);
       
     
         //Namen geben
        let name: HTMLParagraphElement = document.createElement("h3");
        _newDiv.appendChild(name);
        name.innerHTML = _inputArticle._name;
        
    //Preis festlegen
        
        let _price: HTMLParagraphElement = document.createElement("p");
        _newDiv.appendChild(_price);
        _price.innerHTML = "" + _inputArticle._preis;
        _newDiv.setAttribute("preis", _price.innerHTML);
      
        //Button
       
        let _kaufen: HTMLButtonElement  = document.createElement("button");
        _newDiv.appendChild(_kaufen);
        _kaufen.innerHTML = "Löschen";
        _kaufen.addEventListener("click", handleRemoveArticle.bind(_inputArticle));
    }


    function handleRemoveArticle(this: Produkt, _event: Event): void {
        localStorage.removeItem(this._name);
        update();
    }

    //Gesamtpreis in Header plazieren
    function setGesamtpreis(): void {
        pGesamtpreis.innerHTML = "" + gesamtPreis.toFixed(2) + "€";
    }


    function handleRemoveAll(_event: Event): void {
        localStorage.clear();
        update();
    }
}