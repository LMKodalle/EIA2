namespace Endgame {

    export let serverAddress: string = "https://endgame-fishmadness.herokuapp.com/";
    export function insert(): void {
        let query: string = "command=insert";
        query += "&name=" + nickname;
        query += "&score=" + scorePoints;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }

    export function refresh(): void {
        let query: string = "command=refresh";
        sendRequest(query, handleFindResponse);
    }

    function sendRequest(_query: string, _callback: EventListener): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", serverAddress + "?" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }

    function handleInsertResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerArray: Player[] = JSON.parse(xhr.response);
            document.getElementById("nickname").innerHTML = " ";
            document.getElementById("score").innerHTML = " ";

            for (let i: number = 0; i < playerArray.length; i++) {
                document.getElementById("nickname").innerHTML += `<div>${playerArray[i].name} : ${playerArray[i].score}</div>`;
            }
        }
    }
}