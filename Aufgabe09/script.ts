namespace Aufgabe09 {
    let buttonjson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonbutton");
    buttonjson.addEventListener("click", jbutton);

    let buttonhtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlbutton");
    buttonhtml.addEventListener("click", handlehtml);


    async function jbutton(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisisttotaltoll2020.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json();
        console.log(responseText);
    }

    async function handlehtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gisisttotaltoll2020.herokuapp.com";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let serverantwort: HTMLElement = <HTMLElement>document.getElementById("server");
        serverantwort.innerHTML = responseText;

    }


}

