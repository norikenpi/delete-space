function removeSpaces() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/\s+/g, '');
    document.getElementById('outputText').value = outputText;
}
