function removeSpaces() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/\s+/g, '');
    document.getElementById('outputText').value = outputText;
}
function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();  // テキストを選択
    document.execCommand('copy');  // クリップボードにコピー
    alert('クリップボードにコピーしました！');
}
