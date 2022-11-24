// On initialise la latitude et la longitude de Paris (centre de la carte)
var map = null;
// Fonction d'initialisation de la carte
function initMap(lat,lon) {
    // Créer l'objet "map" et l'insèrer dans l'élément HTML qui a l'ID "map"
    map = new google.maps.Map(document.getElementById("map"), {
        // Nous plaçons le centre de la carte avec les coordonnées ci-dessus
        center: new google.maps.LatLng(lat, lon), 
        // Nous définissons le zoom par défaut
        zoom: 14, 
        // Nous définissons le type de carte (ici carte routière)
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        // Nous activons les options de contrôle de la carte (plan, satellite...)
        mapTypeControl: true,
        // Nous désactivons la roulette de souris
        scrollwheel: false, 
        mapTypeControlOptions: {
            // Cette option sert à définir comment les options se placent
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR 
        },
        // Activation des options de navigation dans la carte (zoom...)
        navigationControl: true, 
        navigationControlOptions: {
            // Comment ces options doivent-elles s'afficher
            style: google.maps.NavigationControlStyle.ZOOM_PAN 
        }
    });
}
//recherche de bar
function rechercheBarProche(lo){
    var request = {
        location: lo,
        radius: '800',
        type: ['bar']
      };
    
    var service = new google.maps.places.PlacesService(map);

    service.nearbySearch(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            if (results[i].types[0] !== "bar") {
                results.pop(i);   
            }else{createMarker(results[i])};
            //console.log(results[i]);
            //console.log(results[i]['geometry']['viewport']['Za']['hi']);
            //console.log(results[i]['geometry']['viewport']['Ia']['hi']);
        }
      }
    });
}

var objInfoWindow = new google.maps.InfoWindow()

function createMarker(objPlace) {
    
    var objMarker = new google.maps.Marker({
        position: objPlace.geometry.location,
        map: map,
        icon: "./biere.png",
        title: objPlace.name
    });

    google.maps.event.addListener(objMarker, 'click', function() {
        var strHTML = "<b>" + objPlace.name + "</b><br />"+objPlace.vicinity+ "</b><br />";
        if (objPlace.types[0] == "bar") {
            strHTML += "Bistrot";
        } else if (objPlace.types[0] == "cafe") {
            strHTML += "Café";
        } else if (objPlace.types[0] == "restaurant") {
            strHTML += "Resto";      
        } else {
            strHTML += "Inconnu (" + objPlace.types[0] + ")";   
        }
        
        objInfoWindow.setContent(strHTML);
        objInfoWindow.open(map, this);
    }); 
}


export {map,initMap,rechercheBarProche};