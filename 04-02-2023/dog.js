var butt = window.document.querySelector("#button");
var image = window.document.querySelector("#dogPic");

butt.addEventListener("click", function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => image.src = json.message);
})