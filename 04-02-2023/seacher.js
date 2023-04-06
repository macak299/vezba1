var inputSearch = window.document.querySelector("input");
var main = window.document.querySelector("main");

inputSearch.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        let request = $.ajax({
            url: `https://api.github.com/users/${inputSearch.value}`,
            method: "GET"
        });
        request.done(function (msg) {
            
            let html = `
            <div id="showResult">
            <img src="${msg.avatar_url}"/>
            <p>${msg.login}</p>
            </div>
            `;
            main.insertAdjacentHTML("beforeend", html);
        })
        request.fail(function( jqXHR, textStatus ) {

            alert( "Request failed: " + textStatus );
            
            });
    }
})