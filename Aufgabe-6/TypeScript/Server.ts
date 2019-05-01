import * as Http from "http"; //importiert gesamten Inhalt des Node-internen Moduls "http" als Http in den namespace L05_Server

namespace L05_Server { //Beginn des L05_Server namespace
	console.log("Starting server"); //In der Konsole wird direkt bei Start der Website "Starting server" angezeigt
	let port: number = Number(process.env.PORT); //Neue Variable vom Typ number bekommt die globale Umgebungsvariable PORT als Zahlenwert zugewiesen
	if (!port) //Sollte port nicht zutreffen, dann wird die nächste Code-Zeile ausgeführt
		port = 8100; //Der Wert von port wird auf 8100 gesetzt, d.h der Webserver (Heroku) hört jetzt nur auf diesen Port

	let server: Http.Server = Http.createServer(); //Neue Variable vom Typ Http.Server, welche ein HTTP-Serverobjekt erstellt
	server.addListener("request", handleRequest); //Serverobjekt bekommt die Aufgabe bei jeder Anfrage an den Server die Funktion handleRequest auszuführen
	server.addListener("listening", handleListen); // 
	server.listen(port); //Serverobjekt hört auf den oben definierten Port (8100) und führt nur dann die obigen Listener aus

	function handleListen(): void { //Neue Funktion ohne Rückgabewert
		console.log("Listening"); //Auf der Konsole wird bei Aufruf der Funktion "Listening" ausgegeben
	} //Ende Funktion

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //Neue Funktion ohne Rückgabewert mit den requestListener Parametern request und response
		console.log("I hear voices!"); //Bei Aufruf der Funktion wird auf der Konsole "I hear voices!" ausgegeben

		_response.setHeader("content-type", "text/html; charset=utf-8"); //setzt den MIME typ auf HTML-Textformat im header des Webservers
		_response.setHeader("Access-Control-Allow-Origin", "*"); //Alle Anfragen egal von welchem Ursprung ausgehend bekommen Zugriff auf den Server | wird auch im header festgelegt  

		_response.write(_request.url); //Sendet die url des Servers an den Client

		_response.end(); //Dem Server wird signalisiert, dass die Antwort vollständig ist
	} //Ende Funktion
} //Ende namespace