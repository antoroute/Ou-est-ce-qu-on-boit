import {
  map,
  createMarker
} from "./map.js";
import {
  calcRoute
} from "./calculRoute.js";
var start;
var end;

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
        if (results[i].types[0] !== "bar") {
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
    start = adresse[0];
    end = listeBar[2];
    calcRoute(adresse,listeBar);
    start = adresse[1];
    end = listeBar[2];
    calcRoute(adresse,listeBar);
  });
}

export {
  start,
  end,
  rechercheBarProche
};