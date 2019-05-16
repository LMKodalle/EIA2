import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


Mongo.connect("mongodb+srv://LMKodalle:!Legolego12@mongodb-qp0mh.mongodb.net/test?retryWrites=true", mongocallback);
function mongocallback(db: any): void {
	db.collection();
}

console.log("Starting server");
let port: number = Number(process.env.PORT);
if (!port)
	port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
server.listen(port);

function handleListen(): void {
	console.log("Listening");
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
	console.log("Request");

	_response.setHeader("content-type", "text/html; charset=utf-8");
	_response.setHeader("Access-Control-Allow-Origin", "*");

	let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
	for (let key in url.query)
		_response.write("<li>" + key + "</li>");
	_response.end();
}
