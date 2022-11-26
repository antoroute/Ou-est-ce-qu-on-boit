import {
  map,
  createMarker
} from "./map.js";
import {
  determinationTrajet
} from "./calculRoute.js";

var listeBar =[];

//recherche de bar
function rechercheBarProche(lo,adresse) {
  var request = {
    location: lo,
    radius: '1000',
    type: ['bar']
  };

  var service = new google.maps.places.PlacesService(map);

  return service.nearbySearch(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        if (results[i].types[0] !== "bar" || results[i].rating<4) {
          results.pop(i);
        } else {
          listeBar.push(results[i].vicinity);
          createMarker(results[i]);
        };
        //console.log(results[i]);
        //console.log(results[i]['geometry']['viewport']['Za']['hi']);
        //console.log(results[i]['geometry']['viewport']['Ia']['hi']);
      }
    }
    determinationTrajet(adresse,listeBar);
  });
}

export {
  rechercheBarProche
};