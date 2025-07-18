var map_init = L.map("map", {
  center: [34.82202990893381, 135.4291469803414],
  zoom: 18,
});
var osm = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoib3Nha2FzdGFyYnV4IiwiYSI6ImNreXZpcnk5bTF5NG0ycHB0ZHBpdmY0aGgifQ.nqXNS_ugENj3RWc4HZaBQQ",
  }
).addTo(map_init);
var marker = L.marker([34.82202990893381, 135.4291469803414]).addTo(map_init);
var Basemaps = {
  OSM: osm,
};
var Overlaymaps = {
  Marker: marker,
};
L.control.layers(Basemaps, Overlaymaps).addTo(map_init);

var map2 = L.map("map2", {
  center: [34.90183646968615, 135.44156051574643],
  zoom: 18,
});
var osm = L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoib3Nha2FzdGFyYnV4IiwiYSI6ImNreXZpcnk5bTF5NG0ycHB0ZHBpdmY0aGgifQ.nqXNS_ugENj3RWc4HZaBQQ",
  }
).addTo(map2);
var marker = L.marker([34.90183646968615, 135.44156051574643]).addTo(map2);
var Basemaps = {
  OSM: osm,
};
var Overlaymaps = {
  Marker: marker,
};
L.control.layers(Basemaps, Overlaymaps).addTo(map2);
