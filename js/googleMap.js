// Initialize and add the map
function initMap() {
  // The location of Riga
  const riga = { lat: 56.958345, lng: 24.142047 };
  const riga_2 = { lat: 56.965406, lng: 24.120561 };
  const riga_3 = { lat: 56.970993, lng: 24.138683 };

  const customIcon =
  "Assets/img/piespraude.png";

  // The map, centered at Riga
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: riga,
    mapId: 'a6a2fcfadbdc20ee'
  });

  const contentString_1 =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Kurts coffee</h1>' +
  "</div>";

const infowindow_1 = new google.maps.InfoWindow({
  content: contentString_1,
});

const marker_1 = new google.maps.Marker({
  position: riga,
  map,
  title: "Riga",
  icon: customIcon,
});

marker_1.addListener("click", () => {
  infowindow_1.open({
    anchor: marker_1,
    map,
    shouldFocus: false,
  });
});


const contentString_2 =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">PURCH restaurant</h1>' +
  "</div>"
  
const infowindow_2 = new google.maps.InfoWindow({
  content: contentString_2,
});

const marker_2 = new google.maps.Marker({
  position: riga_2,
  map,
  title: "Riga",
  icon: customIcon,
});

marker_2.addListener("click", () => {
  infowindow_2.open({
    anchor: marker_2,
    map,
    shouldFocus: false,
  });
});

const contentString_3 =
  '<div id="content_pin">' +
    '<div id="siteNotice"></div>' +
    "<div class=row>" +
      "<div class=col-4>" +
        "<img src=Assets/img/AUCHlogo.png class=auch></div>" +
        "<div class=col-8>" +
          '<h1 id="firstHeading" class="firstHeading">AUCH beauty home</h1><br>' +
        '<div id="bodyContent">' +
        "<p class=nomargin>+371 28361686, +371 23202079</p> " + 
        "<p class=nomargin> auchbeauty@gmail.com </p> " +
        " <p class=nomargin> Cēsu iela 20, Rīga</p> " +
        "</div>" +
    "</div>" +
    "</div>" +
  "</div>";

const infowindow_3 = new google.maps.InfoWindow({
  content: contentString_3,
});

const marker_3 = new google.maps.Marker({
  position: riga_3,
  map,
  title: "Riga",
  icon: customIcon,
});

marker_3.addListener("click", () => {
  infowindow_3.open({
    anchor: marker_3,
    map,
    shouldFocus: false,
  });
});

}