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
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerArray = JSON.parse(xhr.response);
            for (let i = 0; i < playerArray.length; i++) {
                playerArray.sort(sort);
            }
            document.getElementById("rank").innerHTML = " ";
            for (let i = 0; i < 5; i++) {
                let div = document.createElement("div");
                document.getElementById("rank").appendChild(div);
                div.innerHTML = `${i + 1}.Place: ${playerArray[i].name} : ${playerArray[i].score}`;
            }
        }
    }
    function sort(a, b) {
        return a.score - b.score;
    }
})(Endgame || (Endgame = {}));
//# sourceMappingURL=DBMongo.js.map