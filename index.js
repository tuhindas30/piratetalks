const btnTranslate = document.getElementById("btn-translate");
const txtInput = document.getElementById("txt-input");
const outputDiv = document.getElementById("output");

const serverURL = "	https://api.funtranslations.com/translate/pirate.json";

function getTranslatedURL(text) {
    return serverURL + "?" + "text=" + text;

}
btnTranslate.addEventListener("click", () => {
    var inputTxt = txtInput.value;
    fetch(getTranslatedURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(() => {
        console.log("Error occured");
        alert("Something went wrong with the server. Try after sometime")
    });
});