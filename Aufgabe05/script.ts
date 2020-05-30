console.log("Hallo");
//Rotwein-Produkte
namespace  Rotwein {
interface RotweinProdukte {
    _img: string;
    _name: string;
    _beschreibung: string;
    _preis: string;
    
}
let rotwein1: RotweinProdukte = { 
            _img: "Jaspis_Chardonney.png", 
            _name: "Jaspis Chardonnay trocken 2017", 
            _beschreibung: "Sein einladendes und frisches Bukett erinnert an Birnen, Pfirsich und vage an Ananas.", 
            _preis: "69,80€"
           
        };
let rotwein2: RotweinProdukte = { 
            _img: "Jaspis_Pinot_Noir", 
            _name: "Jaspis Pinot Noir trocken 2017", 
            _beschreibung: "Kaum ins Glas gekommen, entfaltet er ein sattes Bukett nach reifer Kirsche, unterstrichen von einer rauchigen Note.", 
            _preis: "45,00€"
          
        };
let rotwein3: RotweinProdukte = { 
            _img: "Jaspis_Rotwein.png", 
            _name: "Jaspis Syrah trocken 2017", 
            _beschreibung: "In dunklem Kirschrot mit violetten Aufhellungen am Rande präsentiert sich der Ziereisen Jaspis Syrah trocken im Weinglas. ", 
            _preis: "50,00€"
           
        };

let rotwein4: RotweinProdukte = { 
            _img: "Jaspis_Gutedel.jpg", 
            _name: "Jaspis roter Gutedel trocken unterirdisch 2015", 
            _beschreibung: "015 Jaspis Amphore Roter Gutedel unterirdisch, unfiltriert, ungeschwefelt Weingut Ziereisen", 
            _preis: "39,99€"
         
        };
    
// tslint:disable-next-line: variable-name
let RotweinProdukte: RotweinProdukte[] = [rotwein1, rotwein2, rotwein3, rotwein4];
for (let _index: number = 0; _index < RotweinProdukte.length; _index++) {
    //Div erzeugen
        let _newDiv: HTMLDivElement = document.createElement("div");
        _newDiv.setAttribute("class", "Rotwein-div");
        _newDiv.setAttribute("id", "Rotwein-produkt" + _index);
        document.getElementById("lifestyle")?.appendChild(_newDiv);
    //Produktbild hinzufügen
        let _newImg: HTMLElement = document.createElement("img");
        _newImg.setAttribute("src", RotweinProdukte[_index]._img);
        _newImg.setAttribute("alt", "Rotwein-Produkt");
        _newImg.setAttribute("class", "produktbild");
        document.getElementById("Rotwein-produkt" + _index)?.appendChild(_newImg);
    //Produktbezeichnung hinzufügen
        let _newH3: HTMLHeadingElement = document.createElement("h3");
        _newH3.innerHTML = RotweinProdukte[_index]._name;
        document.getElementById("Rotwein-produkt" + _index)?.appendChild(_newH3);
    //Produkt_beschreibung hinzufügen
        let _newP: HTMLParagraphElement = document.createElement("p");
        _newP.innerHTML = RotweinProdukte[_index]._beschreibung;
        document.getElementById("Rotwein-produkt" + _index)?.appendChild(_newP);
    // _preis hinzufügen
        let _newPreis: HTMLHeadingElement = document.createElement("h4");
        _newPreis.innerHTML = RotweinProdukte[_index]._preis + "€";
        document.getElementById("Rotwein-produkt" + _index)?.appendChild(_newPreis);
    //Button hinzufügen
        let _newButton: HTMLButtonElement = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("Rotwein-produkt" + _index)?.appendChild(_newButton);
    }
    }

    

namespace  Frucht {
interface FruchtProdukte {
        _img: string;
        _name: string;
        _beschreibung: string;
         _preis: string;
        
}
let frucht1: FruchtProdukte = { 
          _img: "Yuzu.jpg", 
          _name: "Japanische Yuzu Zitrone", 
         _beschreibung: "Yuzu, die japanische Zitrone, ist eine aromatische Frucht mit einmaligem Duft,eine perfekte Mischung aus Limette, mit Nuancen von Grapefruit und Mandarine", 
                        _preis: "30,00€"
                        
};
let frucht2: FruchtProdukte = { 
          _img: "Zucchiniblüte.jpg", 
          _name: "Zucchiniblüte", 
          _beschreibung: "Die Blüten sind im rohen Zustand sehr zart und werden beim Backen etwas fester und schmecken leicht knusprig und blumig.", 
          _preis: "32,85€ pro 40g"
                        
                     };

                
// tslint:disable-next-line: variable-name
let FruchtProdukte: FruchtProdukte [] = [frucht1, frucht2];
for (let _index: number = 0; _index <  FruchtProdukte.length; _index++) {
    //Div erzeugen
        let _newDiv: HTMLDivElement = document.createElement("div");
        _newDiv.setAttribute("class", "Frucht-div");
        _newDiv.setAttribute("id", "Frucht-produkt" + _index);
        document.getElementById("lifestyle")?.appendChild(_newDiv);
    //Produktbild hinzufügen
        let _newImg: HTMLElement = document.createElement("img");
        _newImg.setAttribute("src",  FruchtProdukte[_index]._img);
        _newImg.setAttribute("alt", "Frucht-produkt");
        _newImg.setAttribute("class", "produktbild");
        document.getElementById("Frucht-produkt" + _index)?.appendChild(_newImg);
    //Produktbezeichnung hinzufügen
        let _newH3: HTMLHeadingElement = document.createElement("h3");
        _newH3.innerHTML =  FruchtProdukte[_index]._name;
        document.getElementById("Frucht-produkt" + _index)?.appendChild(_newH3);
    //Produkt_beschreibung hinzufügen
        let _newP: HTMLParagraphElement = document.createElement("p");
        _newP.innerHTML =  FruchtProdukte[_index]._beschreibung;
        document.getElementById("Frucht-produkt" + _index)?.appendChild(_newP);
    // _preis hinzufügen
        let _newPreis: HTMLHeadingElement = document.createElement("h4");
        _newPreis.innerHTML = FruchtProdukte[_index]._preis + "€";
        document.getElementById("Frucht-produkt" + _index)?.appendChild(_newPreis);
    //Button hinzufügen
        let _newButton: HTMLButtonElement = document.createElement("button");
        _newButton.innerHTML = "Jetzt kaufen";
        document.getElementById("Frucht-produkt" + _index)?.appendChild(_newButton);
    }
    }


namespace  Fleisch {
interface FleischProdukte {
                _img: string;
                _name: string;
                _beschreibung: string;
                 _preis: string;
                
        }
let fleisch1: FleischProdukte = { 
              _img: "Wagyu_Rind.jpg", 
              _name: "Kobe-Wagyu Rind", 
              _beschreibung: "Das wertvollste Fleisch der Welt stammt aus Japan: Original Wagyu-Rinder zeichnen sich nicht nur durch den hohen Marmorierungsgrad ihres Fleisches aus.", 
              _preis: "498,00€ pro Kg"
                         
        };
let fleisch2: FleischProdukte = { 
                _img: "2.jpg", 
                _name: "Kobe Bee", 
                _beschreibung: "Das Roastbeef aus dem hinteren Teil des Rinderrückens ist das Teilstück aus dem die allseits beliebten Rumpsteaks beziehungsweise Strip Loins geschnitten werden.", 
                _preis: "429,00€ pro Kg"
                                
                             };
        
                        
// tslint:disable-next-line: variable-name
let  FleischProdukte:  FleischProdukte [] = [fleisch1, fleisch2];
for (let _index: number = 0; _index <   FleischProdukte.length; _index++) {
            //Div erzeugen
                let _newDiv: HTMLDivElement = document.createElement("div");
                _newDiv.setAttribute("class", "Fleisch-div");
                _newDiv.setAttribute("id", "Fleisch-produkt" + _index);
                document.getElementById("Fleisch")?.appendChild(_newDiv);
            //Produktbild hinzufügen
                let _newImg: HTMLElement = document.createElement("img");
                _newImg.setAttribute("src",   FleischProdukte[_index]._img);
                _newImg.setAttribute("alt", "Fleisch-Produkt");
                _newImg.setAttribute("class", "produktbild");
                document.getElementById("Fleisch-produkt" + _index)?.appendChild(_newImg);
            //Produktbezeichnung hinzufügen
                let _newH3: HTMLHeadingElement = document.createElement("h3");
                _newH3.innerHTML =  FleischProdukte[_index]._name;
                document.getElementById("Fleisch-produkt" + _index)?.appendChild(_newH3);
            //Produkt_beschreibung hinzufügen
                let _newP: HTMLParagraphElement = document.createElement("p");
                _newP.innerHTML =   FleischProdukte[_index]._beschreibung;
                document.getElementById("Fleisch-produkt" + _index)?.appendChild(_newP);
            // _preis hinzufügen
                let _newPreis: HTMLHeadingElement = document.createElement("h4");
                _newPreis.innerHTML =  FleischProdukte[_index]._preis + "€";
                document.getElementById("Fleisch-produkt" + _index)?.appendChild(_newPreis);
            //Button hinzufügen
                let _newButton: HTMLButtonElement = document.createElement("button");
                _newButton.innerHTML = "Jetzt kaufen";
                document.getElementById("Fleisch-produkt" + _index)?.appendChild(_newButton);
            }
    }

namespace  Fisch {
interface FischProdukte {
            _img: string;
            _name: string;
            _beschreibung: string;
            _preis: string;
                        
                }
let fisch1:  FischProdukte = { 
            _img: "Hummer2.jpg", 
            _name: "Hummer", 
            _beschreibung: "Hummer schmeckt angenehm nach Meer und ein bisschen wie Garnelen oder Languste, allerdings mit einer ganz eigenen Note und noch delikater.", 
            _preis: "65,00€ pro Kg"
                                        
                };
let fisch2:  FischProdukte = { 
            _img: "schwarzer-kaviar_4.jpg", 
            _name: "Schwarzer Kavier von Royal", 
            _beschreibung: "Kaviar schmeckt sehr zart und fein-sahnig, Asetra-Kaviar eher nussig, sein Korn ist fester und knackiger, Sevruga-Kaviar dagegen zeichnet sich durch seinen intensiven, fein-würzigen Geschmack aus.", 
            _preis: "1580,00€ pro Kg"
                                        
                                     };
                
                                
// tslint:disable-next-line: variable-name
let  FischProdukte:   FischProdukte [] = [fisch1, fisch2];
for (let _index: number = 0; _index <    FischProdukte.length; _index++) {
                    //Div erzeugen
                        let _newDiv: HTMLDivElement = document.createElement("div");
                        _newDiv.setAttribute("class", "lifestyle-div");
                        _newDiv.setAttribute("id", "lifestyle-produkt" + _index);
                        document.getElementById("lifestyle")?.appendChild(_newDiv);
                    //Produktbild hinzufügen
                        let _newImg: HTMLElement = document.createElement("img");
                        _newImg.setAttribute("src",    FischProdukte[_index]._img);
                        _newImg.setAttribute("alt", "Fisch-Produkt");
                        _newImg.setAttribute("class", "produktbild");
                        document.getElementById("Fisch-produkt" + _index)?.appendChild(_newImg);
                    //Produktbezeichnung hinzufügen
                        let _newH3: HTMLHeadingElement = document.createElement("h3");
                        _newH3.innerHTML =   FischProdukte[_index]._name;
                        document.getElementById("Fisch-produkt" + _index)?.appendChild(_newH3);
                    //Produkt_beschreibung hinzufügen
                        let _newP: HTMLParagraphElement = document.createElement("p");
                        _newP.innerHTML =    FischProdukte[_index]._beschreibung;
                        document.getElementById("Fisch-produkt" + _index)?.appendChild(_newP);
                    // _preis hinzufügen
                        let _newPreis: HTMLHeadingElement = document.createElement("h4");
                        _newPreis.innerHTML =   FischProdukte[_index]._preis + "€";
                        document.getElementById("Fisch-produkt" + _index)?.appendChild(_newPreis);
                    //Button hinzufügen
                        let _newButton: HTMLButtonElement = document.createElement("button");
                        _newButton.innerHTML = "Jetzt kaufen";
                        document.getElementById("Fisch-produkt" + _index)?.appendChild(_newButton);
                    }
            }
namespace  Trüffel {
interface TrüffelPodukte {
            _img: string;
            _name: string;
            _beschreibung: string;
            _preis: string;
                                
                        }
let trüffel1:  TrüffelPodukte = { 
                _img: "Trüffel.jpg", 
                _name: "Perigold Trüffel", 
                _beschreibung: "Die Perigord Trüffel hat im Gegensatz zur Alba Trüffel einen dezenten aromatischen Geruch, dafür aber einen intensiven Geschmack. Der Geruch ist mit einer erdigen, an den Wald erinnernden sowie einer leicht süßlichen Moschusnote, in sich schon außergewöhnlich.", 
                _preis: "1,60€ pro g"
                                                
                        };
let trüffel2:  TrüffelPodukte = { 
                _img: "weisser-albatrueffel.jpg", 
                _name: "Albatrüffel", 
                _beschreibung: "Albatrüffeln haben ein Aroma, welches intensiv nach Knoblauch, Schalotten und Weichkäse riecht. Trüffelsucher machen sich meist nachts auf die Suche nach der Tuber Magnatum, da dann der Geruch durch die auf den Boden sinkende Feuchtigkeit sehr intesiv ist. ", 
                _preis: "4,20€ pro g"
                                                
                                             };
                        
                                        
// tslint:disable-next-line: variable-name
let TrüffelPodukte:   TrüffelPodukte [] = [trüffel1, trüffel2];
for (let _index: number = 0; _index <    TrüffelPodukte.length; _index++) {
                            //Div erzeugen
                                let _newDiv: HTMLDivElement = document.createElement("div");
                                _newDiv.setAttribute("class", "Trüffel-div");
                                _newDiv.setAttribute("id", "Trüffel-produkt" + _index);
                                document.getElementById("Trüffel")?.appendChild(_newDiv);
                            //Produktbild hinzufügen
                                let _newImg: HTMLElement = document.createElement("img");
                                _newImg.setAttribute("src",    TrüffelPodukte[_index]._img);
                                _newImg.setAttribute("alt", "Trüffel-Produkt");
                                _newImg.setAttribute("class", "produktbild");
                                document.getElementById("Trüffel-produkt" + _index)?.appendChild(_newImg);
                            //Produktbezeichnung hinzufügen
                                let _newH3: HTMLHeadingElement = document.createElement("h3");
                                _newH3.innerHTML =   TrüffelPodukte[_index]._name;
                                document.getElementById("Trüffel-produkt" + _index)?.appendChild(_newH3);
                            //Produkt_beschreibung hinzufügen
                                let _newP: HTMLParagraphElement = document.createElement("p");
                                _newP.innerHTML =    TrüffelPodukte[_index]._beschreibung;
                                document.getElementById("Trüffel-produkt" + _index)?.appendChild(_newP);
                            // _preis hinzufügen
                                let _newPreis: HTMLHeadingElement = document.createElement("h4");
                                _newPreis.innerHTML =   TrüffelPodukte[_index]._preis + "€";
                                document.getElementById("Trüffel-produkt" + _index)?.appendChild(_newPreis);
                            //Button hinzufügen
                                let _newButton: HTMLButtonElement = document.createElement("button");
                                _newButton.innerHTML = "Jetzt kaufen";
                                document.getElementById("Trüffel-produkt" + _index)?.appendChild(_newButton);
                            }
                    }