const btnTranslate = document.getElementById("btn-translate");
const btnClear = document.getElementById("btn-clear");
const textInput = document.getElementById("text-input");
const outputDiv = document.getElementById("output-text");

const serverURL = "	https://api.funtranslations.com/translate/pirate.json";

const getTranslatedURL = (text) => `${serverURL}?text=${text}`;

btnClear.addEventListener("click", () => (outputDiv.innerText = ""));

btnTranslate.addEventListener("click", async () => {
  const inputText = textInput.value;

  try {
    const response = await fetch(getTranslatedURL(inputText)).then((data) =>
      data.json()
    );
    outputDiv.innerText = response.contents.translated;
  } catch (error) {
    alert("Something went wrong. Try after sometime :(");
  }
});
