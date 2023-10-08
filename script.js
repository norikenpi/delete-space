function removeSpaces() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value;
    // 連続するスペースを1つのスペースに置き換える
    const outputText = inputText.replace(/\s+/g, ' ');
    document.getElementById('outputText').value = outputText;

    // 入力テキストボックスの中身を空にする
    inputTextElement.value = '';
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
