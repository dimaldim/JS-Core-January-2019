function solve() {
  let buttons = document.querySelectorAll("button");
  let encode = buttons[0];
  let decode = buttons[1];

  encode.addEventListener("click", encodeMessage);
  decode.addEventListener("click", decodeMessage);

  function encodeMessage() {
    let message = document.querySelectorAll("textarea")[0].value;
    let newMessage = "";
    for (let i = 0; i < message.length; i++) {
      let char = message.charCodeAt(i) + 1;
      newMessage += String.fromCharCode(char);
    }
    document.querySelectorAll("textarea")[0].value = "";
    document.querySelectorAll("textarea")[1].value = newMessage;
  }

  function decodeMessage() {
    let message = document.querySelectorAll("textarea")[1].value;
    let newMessage = "";
    for (i = 0; i < message.length; i++) {
      let char = message.charCodeAt(i) - 1;
      newMessage += String.fromCharCode(char);
    }
    document.querySelectorAll("textarea")[1].value = newMessage;
  }
}
