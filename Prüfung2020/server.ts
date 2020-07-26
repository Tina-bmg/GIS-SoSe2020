
import * as Http from "http"; // ein url link wird aufgerufen
import * as Url from "url";
import * as Mongo from "mongodb";




export namespace PRÜFUNG { // wird auf Funktionen die importiert werden geprüft

    let orders: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl: string = "mongodb+srv://baumgaer:<password>@cluster0.2ocpm.mongodb.net/<dbname>?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {


        let server: Http.Server = Http.createServer(); // neuer server wird erstellt 
        server.addListener("request", handleRequest); //anfragen bearbeiten 
        server.addListener("listening", handleListen); //anfragen abfangen
        server.listen(port);

    }

    //Ausführen bei Start

    async function connectToDatabase(_url: string): Promise<void> {
        console.log("Hii");
        let options: Mongo.mongoClientOptions = { userNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.mongoClient = new Mongo.mongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Eisladen").collection("Bestellungen");
        console.log("Database connection" + orders != undefined);

    }
    function handleListen(): void {
        console.log("Listening");
    }

    //Ausführen bei Anfragen
    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear voices!"); //Methodenaufruf

        //Parameter erstellen und den Kopf des Dokuments (http-Header)
        _response.setHeader("content-type", "text/html; charset=utf-8"); //gibt die Zeichncordierung des Dokuments an und gibt den Conten-Typ an
        _response.setHeader("Access-Control-Allow-Origin", "*"); // gibt an, ob die Antwort mit dem Anfordern von Code vom angegebenen Ursprung geteilt werden kann.

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (q.pathname == "/send") {
                for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br>");
                }

            }
            else if (q.pathname == "/json") {
                let jsonAusgabe: string = JSON.stringify(q.query);
                _response.write(jsonAusgabe);
            }
        }
        _response.end();
    }

}
