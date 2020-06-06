

namespace  Produkt {
interface Produkt {
    _img: string;
    _name: string;
    _beschreibung: string;
    _preis: number;
    
}
let rotwein1: Produkt = { 
            _img: "Jaspis_Chardonney.png", 
            _name: "Jaspis Chardonnay trocken 2017", 
            _beschreibung: "Sein einladendes und frisches Bukett erinnert an Birnen, Pfirsich und vage an Ananas.", 
            _preis: 69.90
           
        };
let rotwein2: Produkt = { 
            _img: "Jaspis_Pinot_Noir.png", 
            _name: "Jaspis Pinot Noir trocken 2017", 
            _beschreibung: "Kaum ins Glas gekommen, entfaltet er ein sattes Bukett nach reifer Kirsche, unterstrichen von einer rauchigen Note.", 
            _preis: 45.00
          
        };
let rotwein3: Produkt = { 
            _img: "Jaspis_Rotwein.png", 
            _name: "Jaspis Syrah trocken 2017", 
            _beschreibung: "In dunklem Kirschrot mit violetten Aufhellungen am Rande präsentiert sich der Ziereisen Jaspis Syrah trocken im Weinglas. ", 
            _preis: 50.00           
        };

let rotwein4: Produkt = { 
            _img: "Jaspis_Gutedel.jpg", 
            _name: "Jaspis roter Gutedel trocken unterirdisch 2015", 
            _beschreibung: "015 Jaspis Amphore Roter Gutedel unterirdisch, unfiltriert, ungeschwefelt Weingut Ziereisen", 
            _preis: 39.99
         

    

}
let frucht1: Produkt = { 
          _img: "Yuzu.jpg", 
          _name: "Japanische Yuzu Zitrone", 
         _beschreibung: "Yuzu, die japanische Zitrone, ist eine aromatische Frucht mit einmaligem Duft,eine perfekte Mischung aus Limette, mit Nuancen von Grapefruit und Mandarine", 
                        _preis: 30.00
                        
};
let frucht2: Produkt = { 
          _img: "Zucchiniblüte.jpg", 
          _name: "Zucchiniblüte", 
          _beschreibung: "Die Blüten sind im rohen Zustand sehr zart und werden beim Backen etwas fester und schmecken leicht knusprig und blumig.", 
          _preis: 32.85
                        

}

            
        
let fleisch1: Produkt = { 
              _img: "Wagyu_Rind.jpg", 
              _name: "Kobe-Wagyu Rind", 
              _beschreibung: "Das wertvollste Fleisch der Welt stammt aus Japan: Original Wagyu-Rinder zeichnen sich nicht nur durch den hohen Marmorierungsgrad ihres Fleisches aus.", 
              _preis: 498.00                         
        };
let fleisch2: Produkt = { 
                _img: "2.jpg", 
                _name: "Kobe Bee", 
                _beschreibung: "Das Roastbeef aus dem hinteren Teil des Rinderrückens ist das Teilstück aus dem die allseits beliebten Rumpsteaks beziehungsweise Strip Loins geschnitten werden.", 
                _preis: 429.00
                                
                             };
        
                        



                        
                
let fisch1:  Produkt = { 
            _img: "Hummer2.jpg", 
            _name: "Hummer", 
            _beschreibung: "Hummer schmeckt angenehm nach Meer und ein bisschen wie Garnelen oder Languste, allerdings mit einer ganz eigenen Note und noch delikater.", 
            _preis: 65.00
                                        
                };
let fisch2:  Produkt = { 
            _img: "schwarzer-kaviar_4.jpg", 
            _name: "Schwarzer Kavier von Royal", 
            _beschreibung: "Kaviar schmeckt sehr zart und fein-sahnig, Asetra-Kaviar eher nussig, sein Korn ist fester und knackiger, Sevruga-Kaviar dagegen zeichnet sich durch seinen intensiven, fein-würzigen Geschmack aus.", 
            _preis: 1580.00
                                        
                                     };
                
                                
                        
let trüffel1:  Produkt = { 
                _img: "Trüffel.jpg", 
                _name: "Perigold Trüffel", 
                _beschreibung: "Die Perigord Trüffel hat im Gegensatz zur Alba Trüffel einen dezenten aromatischen Geruch, dafür aber einen intensiven Geschmack. Der Geruch ist mit einer erdigen, an den Wald erinnernden sowie einer leicht süßlichen Moschusnote, in sich schon außergewöhnlich.", 
                _preis: 1.60
                                                
                        };
let trüffel2:  Produkt = { 
                _img: "weisser-albatrueffel.jpg", 
                _name: "Albatrüffel", 
                _beschreibung: "Albatrüffeln haben ein Aroma, welches intensiv nach Knoblauch, Schalotten und Weichkäse riecht. Trüffelsucher machen sich meist nachts auf die Suche nach der Tuber Magnatum, da dann der Geruch durch die auf den Boden sinkende Feuchtigkeit sehr intesiv ist. ", 
                _preis: 4.20
                                                
                                             };
let produkt: Produkt[] =[rotwein1, rotwein2, rotwein3, rotwein4, frucht1, frucht2, fleisch1, fleisch2, fisch1, fisch2, trüffel1, trüffel2]
                                        
for (let _index: number = 0; _index <    produkt.length; _index++) {
                            //Div erzeugen
                                let _newDiv: HTMLDivElement = document.createElement("div");
                                _newDiv.setAttribute("class", "div");
                                _newDiv.setAttribute("id", "produkt" + _index);
                                document.getElementById("produkt")?.appendChild(_newDiv);
                            //Produktbild hinzufügen +A
                                let _newImg: HTMLElement = document.createElement("img");
                                _newImg.setAttribute("src", produkt[_index]._img);
                                _newImg.setAttribute("alt", "produkt");
                                _newImg.setAttribute("class", "produktbild"); 
                                document.getElementById("produkt" + _index)?.appendChild(_newImg); 
                            //Produktbezeichnung hinzufügen
                                let _newH3: HTMLHeadingElement = document.createElement("h3");
                                _newH3.innerHTML =   produkt[_index]._name;
                                document.getElementById("produkt" + _index)?.appendChild(_newH3);
                            //Produkt_beschreibung hinzufügen
                                let _newP: HTMLParagraphElement = document.createElement("p");
                                _newP.innerHTML =    produkt[_index]._beschreibung;
                                document.getElementById("produkt" + _index)?.appendChild(_newP);
                            // _preis hinzufügen
                                let _newPreis: HTMLHeadingElement = document.createElement("h4");
                                _newPreis.innerHTML =   produkt[_index]._preis.toFixed(2) + "€";
                                document.getElementById("produkt" + _index)?.appendChild(_newPreis);
                            //Button hinzufügen
                                let _newButton: HTMLButtonElement = document.createElement("button");
                                _newButton.innerHTML = "Jetzt kaufen";
                                document.getElementById("produkt" + _index)?.appendChild(_newButton);
                            }
                    }