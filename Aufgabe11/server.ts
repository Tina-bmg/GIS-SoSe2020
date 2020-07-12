
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace A11Server {
    interface Kontakte {
        [type: string]: string[] | undefined;
    }
    let orders: Mongo.Collection;
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    let databaseUrl: string = "mongodb+srv://baumgaer:<password>@cluster0.2ocpm.mongodb.net/<dbname>?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
        

    }
    async function connectToDatabase(_url: string): Promise<void> {
        console.log("Hii");
        let options: Mongo.mongoClientOptions = { userNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.mongoClient = new Mongo.mongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Database connection" + orders != undefined);

    }
    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("Guten Tag");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let pathname: string | null = q.pathname;
            if (pathname == "/send") {
                await handleSend(q);
            }
            else if (pathname == "/get") {
                await handleGet(_response);
            }
        }
        _response.end();
    }
   
    async function handleSend(_q: Url.UrlWithParsedQuery): Promise<void> {
        console.log("Daten an Mongo übermitteln");
        console.log(_q.query);
        orders.insertOne(_q.query);
    }
    async function handleGet(_response: Http.ServerResponse): Promise<void> {
        let kontaktArray: Kontakte[] = await orders.find().toArray();
        _response.write(JSON.stringify(kontaktArray));
    }
}

