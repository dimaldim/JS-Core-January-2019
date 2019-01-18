function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');

  let sentences = input.textContent.split('.');

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraph = document.createElement('p');
    paragraph.textContent = sentences[i];

    if (sentences.length > i + 1) {
      paragraph.textContent += '. ' + sentences[i];
    }

    if (sentences.length > i + 2) {
      paragraph.textContent += '. ' + sentences[i + 2];
    }

    output.appendChild(paragraph);
  }
}