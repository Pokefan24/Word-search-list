function generateList() {
  const input = document.getElementById('wordInput').value;
  const wordsPerPuzzle = parseInt(document.getElementById('wordsPerPuzzle').value) || 10;
  let words = input.split(/[\n,]+/).map(w => w.trim().toUpperCase()).filter(Boolean);

  let output = '';

  for (let i = 0; i < words.length; i += wordsPerPuzzle) {
    const chunk = words.slice(i, i + wordsPerPuzzle);
    output += chunk.join('\n') + '\n\n';
  }

  document.getElementById('output').textContent = output.trim();
}

function copyOutput() {
  const output = document.getElementById('output').textContent;
  navigator.clipboard.writeText(output)
    .then(() => alert('List copied to clipboard!'))
    .catch(err => alert('Copy failed: ' + err));
}
