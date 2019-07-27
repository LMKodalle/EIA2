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
    }

    function handleFindResponse(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let playerArray: Player[] = JSON.parse(xhr.response);
            for (let i: number = 0; i < playerArray.length; i++) {
                playerArray.sort(sort);
            }
            document.getElementById("rank").innerHTML = " ";

            for (let i: number = 0; i < 5; i++) {
                let div: HTMLDivElement = document.createElement("div");
                document.getElementById("rank").appendChild(div);
                div.setAttribute("class", "rank");
                div.innerHTML = `${i + 1}.Place: ${playerArray[i].name} : ${playerArray[i].score}`;
            }
        }
    }
    function sort(a: Player, b: Player): number {
        return b.score - a.score; 
    }
}