import {
  map,
  createMarker
} from "./map.js";

//recherche de bar
function rechercheBarProche(lo) {
  var request = {
      location: lo,
      radius: '1000',
      type: ['bar']
  };

  var service = new google.maps.places.PlacesService(map);

  service.nearbySearch(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
              if (results[i].types[0] !== "bar") {
                  results.pop(i);
              } else {
                  createMarker(results[i])
              };
              //console.log(results[i]);
              //console.log(results[i]['geometry']['viewport']['Za']['hi']);
              //console.log(results[i]['geometry']['viewport']['Ia']['hi']);
          }
      }
  });
}

export {
  rechercheBarProche
};