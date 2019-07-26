var Endgame;
(function (Endgame) {
    Endgame.serverAddress = "https://endgame-fishmadness.herokuapp.com/";
    function insert() {
        let query = "command=insert";
        query += "&name=" + Endgame.nickname;
        query += "&score=" + Endgame.scorePoints;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    Endgame.insert = insert;
    function refresh() {
        let query = "command=refresh";
        sendRequest(query, handleFindResponse);
    }
    Endgame.refresh = refresh;
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", Endgame.serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerArray = JSON.parse(xhr.response);
            document.getElementById("nickname").innerHTML = " ";
            for (let i = playerArray.length - 5; i < playerArray.length; i++) {
                document.getElementById("nickname").innerHTML += `<div>${playerArray[i].name} : ${playerArray[i].score}</div>`;
            }
        }
    }
})(Endgame || (Endgame = {}));
//# sourceMappingURL=DBMongo.js.map