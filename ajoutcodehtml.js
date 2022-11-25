var bouttonAjoutAdresse = document.getElementById("bouttonAjoutAdresse");
var nbAdresse = 1;

bouttonAjoutAdresse.addEventListener("click", function () {
    var txtAmodifier = "";
    nbAdresse += 1;
    for (var i = 1; i <= nbAdresse; i++) {
        txtAmodifier += '<div class="form-adresse">' +
            '<label for="name">Entrer Adresse ' + i + ' : </label>' +
            '<input type="text" name="adresse" id="adresse" required>' +
            '</div> </br>';
    };
    txtAmodifier += '<div class="form-adresse">' +
        '<input type="submit" value="Rechercher Bar">' +
        '</div>';
    document.getElementById("form-adresse").innerHTML = txtAmodifier;
});