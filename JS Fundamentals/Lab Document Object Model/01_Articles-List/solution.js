function solve() {
  var title = document.getElementById("createTitle").value;
  var text = document.getElementById("createContent").value;

  if (title.length > 0 && text.length > 0) {
    var article = document.createElement("article");
    var h3 = document.createElement("h3");
    var p = document.createElement("p");

    h3.textContent = title;
    p.textContent = text;

    article.appendChild(h3);
    article.appendChild(p);

    //Append <article> to #articles
    document.getElementById("articles").appendChild(article);

    //Clear title and textarea content
    document.getElementById("createTitle").value = "";
    document.getElementById("createContent").value = "";
  }
}
