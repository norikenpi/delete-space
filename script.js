function removeSpaces() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.replace(/\s+/g, '');
    document.getElementById('outputText').value = outputText;
}
function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    const copyButton = document.querySelector('button[onclick="copyToClipboard()"]');
    
    outputText.select();
    document.execCommand('copy');
    
    copyButton.textContent = 'コピーしました！';
    setTimeout(() => {
        copyButton.textContent = 'クリップボードにコピー';
    }, 2000);
}
