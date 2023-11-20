function removeSpaces() {
    const inputTextElement = document.getElementById('inputText');
    const inputText = inputTextElement.value;
    // 連続するスペースを1つのスペースに置き換える
    const outputText = inputText.replace(/\s+/g, '');
    const outputTextElement = document.getElementById('outputText');
    outputTextElement.value = outputText;

    // 入力テキストボックスの中身を空にする
    inputTextElement.value = '';

    // スペースが削除されたテキストをクリップボードにコピー
    outputTextElement.select();
    document.execCommand('copy');
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
