const getLoremIpsum = numberOfParagraphs => {
    fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${numberOfParagraphs}`).then(
        response => response.json()
    ).then(
            loremIpsumTextArray => {
                updateResults(loremIpsumTextArray);
        });
}

const addCopyButton = text => {
    const resultElement = document.getElementById("result");
    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy";
    copyBtn.classList.add("copy");

    copyBtn.onclick = () => {
        navigator.clipboard.writeText(text);
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 2000)
    }

    resultElement.appendChild(copyBtn);
};

const updateResults = textArray => {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
    resultElement.innerHTML = textArray.map(
        paragraph => `<p>${paragraph}</p>`
    ).join("");
    addCopyButton(textArray.join(""));
    resultElement.classList.add("show");
};

const getLoremIpsumBtnElement = document.getElementById("getLoremIpsum");
const paragraphsCountElement = document.getElementById("paragraphsCount");

getLoremIpsumBtnElement.addEventListener("click", () => {
    getLoremIpsum(parseInt(paragraphsCountElement.value));
    paragraphsCountElement.value = "";
});