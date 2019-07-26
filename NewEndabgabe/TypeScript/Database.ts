import * as Mongo from "mongodb";

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "test";
let db: Mongo.Db;
let player: Mongo.Collection;

if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://LMKodalle:!Legolego12@mongodb-qp0mh.mongodb.net/eia2-Endabgabe";
    databaseName = "eia2-Endabgabe";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);

function handleConnect(_e: Mongo.MongoError, _client: Mongo.MongoClient): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        player = db.collection("playerScores");
    }
}

export function insert(_doc: Player): void {
    player.insertOne(_doc, handleInsert);
}

function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

export function findAll(_callback: Function): void {

    var cursor: Mongo.Cursor = player.find();

    cursor.toArray(prepareAnswer);

    function prepareAnswer(_e: Mongo.MongoError, playerArray: Player[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(playerArray));
    }
}