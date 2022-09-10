/*Initialisierne der Karte, festlegen der sichtbaren Position und der Start-Zoomstufe*/
/* TODO: Function um automatisch die Karte mit anderen Koordinaten (übergeben) aufzurufen */
var map = L.map('map').setView([52.5085431, 13.3752057], 20);
const tileUrl = 'https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=wi3XP92YvcmIfVHpo29G';
const attribution = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
const tiles = L.tileLayer(tileUrl, { attribution }).addTo(map);
var key = (new URLSearchParams(window.location.search)).get("key")

function get(url) {
    var strReturn = "";
    jQuery.ajax({
        url: url,
        success: function (html) {
            strReturn = html;
        },
        async: false
    });
    return strReturn;
}

var mapData = get("./api?getMapDataFromKey=" + key)

var mapdiv = document.getElementById("map")

mapdiv.ondragover = function (e) {
  e.preventDefault()
  e.dataTransfer.dropEffect = "move"
}

mapdiv.ondrop = function (e) {
  e.preventDefault()
  imagePath = e.dataTransfer.getData("text/plain")
  coordinates = map.containerPointToLatLng(L.point([e.clientX,e.clientY]))
  L.marker(coordinates,{icon: L.icon({iconUrl: imagePath}),
                        draggable: true})
    .addTo(map)
}

