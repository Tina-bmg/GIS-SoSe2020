"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A11Server;
(function (A11Server) {
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let databaseUrl = "mongodb+srv://baumgaer:<password>@cluster0.2ocpm.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    async function connectToDatabase(_url) {
        console.log("Hii");
        let options = { userNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.mongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Database connection" + orders != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("Guten Tag");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            let pathname = q.pathname;
            if (pathname == "/send") {
                await handleSend(q);
            }
            else if (pathname == "/get") {
                await handleGet(_response);
            }
        }
        _response.end();
    }
    async function handleSend(_q) {
        console.log("Daten an Mongo übermitteln");
        console.log(_q.query);
        orders.insertOne(_q.query);
    }
    async function handleGet(_response) {
        let kontaktArray = await orders.find().toArray();
        _response.write(JSON.stringify(kontaktArray));
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//# sourceMappingURL=server.js.map