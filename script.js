function upDate(previewPic) {
    console.log("Événement upDate déclenché !");
    console.log("alt :", previewPic.alt);
    console.log("src :", previewPic.src);

    // Changer le texte de la div #image avec le alt de l'image survolée
    document.getElementById("image").innerHTML = previewPic.alt;

    // Changer l'image d'arrière-plan de la div #image avec la source de l'image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Remettre le texte original (exactement celui de index.html, avec le point final)
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";

    // Remettre l'arrière-plan original (vide)
    document.getElementById("image").style.backgroundImage = "url('')";
}
