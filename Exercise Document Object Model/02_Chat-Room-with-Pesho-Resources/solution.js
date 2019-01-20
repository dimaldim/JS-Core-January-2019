function solve() {
  let buttons = document.querySelectorAll("button");
  let myButton = buttons[0];
  let peshoButton = buttons[1];

  myButton.addEventListener("click", () => {
    let chatDiv = document.createElement("div");
    let span = document.createElement("span");
    let paragraph = document.createElement("p");

    chatDiv.appendChild(span);
    chatDiv.appendChild(paragraph);
    span.textContent = "Me";
    chatDiv.style.textAlign = "left";
    paragraph.textContent = document.getElementById("myChatBox").value;
    document.getElementById("myChatBox").value = "";

    document.getElementById("chatChronology").appendChild(chatDiv);
  });

  peshoButton.addEventListener("click", () => {
    let chatDiv = document.createElement("div");
    let span = document.createElement("span");
    let paragraph = document.createElement("p");

    chatDiv.appendChild(span);
    chatDiv.appendChild(paragraph);
    span.textContent = "Pesho";
    chatDiv.style.textAlign = "right";
    paragraph.textContent = document.getElementById("peshoChatBox").value;
    document.getElementById("peshoChatBox").value = "";

    document.getElementById("chatChronology").appendChild(chatDiv);
  });
}
