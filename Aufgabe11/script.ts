
namespace Aufgabe11 { 
    let sendbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send");
    sendbutton.addEventListener("click", sendbuttonhandler);

    let getbutton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("get");
    getbutton.addEventListener("click", getbuttonhandle);

    let output: HTMLElement = <HTMLElement>document.getElementById("output");

    async function sendbuttonhandler(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisisttotaltoll2020.herokuapp.com/send";
        url += "/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        await fetch(url);
    }
    async function getbuttonhandle(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisisttotaltoll2020.herokuapp.com/get";
        url += "/get";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url += "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
         
        }
    }



