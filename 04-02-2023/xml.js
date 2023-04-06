var input = window.document.querySelector("#ipAddress");
var butt = window.document.querySelector("#show");

butt.addEventListener("click", function () {
    var request = $.ajax({
        url: `http://www.geoplugin.net/xml.gp?ip=${input.textContent}`,
        method: "GET"
    });

    request.done(function (response) {
        alert(response.getElementsByTagName("geoplugin_countryName")[0].textContent);
        alert(response.getElementsByTagName("geoplugin_city")[0].textContent);
    });
})