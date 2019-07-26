"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mongo = require("mongodb");
let databaseURL = "mongodb://localhost:27017";
let databaseName = "test";
let db;
let player;
if (process.env.NODE_ENV == "production") {
    databaseURL = "mongodb+srv://LMKodalle:!Legolego12@mongodb-qp0mh.mongodb.net/eia2-Endabgabe";
    databaseName = "eia2-Endabgabe";
}
Mongo.MongoClient.connect(databaseURL, { connectTimeoutMS: 8000 }, handleConnect);
function handleConnect(_e, _client) {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        player = db.collection("playerScores");
    }
}
function insert(_doc) {
    player.insertOne(_doc, handleInsert);
}
exports.insert = insert;
function handleInsert(_e) {
    console.log("Database insertion returned -> " + _e);
}
function findAll(_callback) {
    var cursor = player.find();
    cursor.toArray(prepareAnswer);
    function prepareAnswer(_e, playerArray) {
        if (_e)
            _callback("Error" + _e);
        else
            _callback(JSON.stringify(playerArray));
    }
}
exports.findAll = findAll;
//# sourceMappingURL=Database.js.map