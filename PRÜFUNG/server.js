"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRÜFUNG = void 0;
const Http = require("http"); // ein url link wird aufgerufen
const Url = require("url");
const Mongo = require("mongodb");
var PRÜFUNG;
(function (PRÜFUNG) {
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://baumgaer:<password>@cluster0.2ocpm.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer(); // neuer server wird erstellt 
        server.addListener("request", handleRequest); //anfragen bearbeiten 
        server.addListener("listening", handleListen); //anfragen abfangen
        server.listen(port);
    }
    //Ausführen bei Start
    async function connectToDatabase(_url) {
        console.log("Hii");
        let options = { userNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.mongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Eisladen").collection("Bestellungen");
        console.log("Database connection" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    //Ausführen bei Anfragen
    async function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Methodenaufruf
        //Parameter erstellen und den Kopf des Dokuments (http-Header)
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt die Zeichncordierung des Dokuments an und gibt den Conten-Typ an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // gibt an, ob die Antwort mit dem Anfordern von Code vom angegebenen Ursprung geteilt werden kann.
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            if (q.pathname == "/send") {
                for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br>");
                }
            }
            else if (q.pathname == "/json") {
                let jsonAusgabe = JSON.stringify(q.query);
                _response.write(jsonAusgabe);
            }
        }
        _response.end();
    }
})(PRÜFUNG = exports.PRÜFUNG || (exports.PRÜFUNG = {}));
//# sourceMappingURL=server.js.map