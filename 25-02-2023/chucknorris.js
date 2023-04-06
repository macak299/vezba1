const url = "https://api.chucknorris.io/jokes/random";

var refresh = window.document.getElementById("refresh");
refresh.addEventListener("click", function () {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsObject) {
            window.document.getElementById("joke").innerHTML = JSON.stringify(jsObject.value);
        });
});