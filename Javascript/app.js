var is_debug = true;

$(function() {
  init();
})


function init() {
  //alert("ciao")
  getPosition()
}

function getPosition(){ //prende la posizione
  debug("find position")
     getWeather(45.5397733,10.2229390)
if(is_debug) {

  getWeather(45.5397733,10.2229390)

} else {
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude,position.coords.longitude)
  });
}
}

function getWeather(lat,long) { //prende il meteo
  debug("getting weather of lat:" + lat+", long: "+ long)
  $.simpleWeather({
    location: lat+","+long,
    woeid: '',
    unit: 'c',
    success: function(w){

      renderWeather(w)
    },
    error: function(){
       debug("ERROR! receiving meteo")
    }
  })
}

function renderWeather(w){ //lo renderizza
      debug(w)
      $("#weather .location").text(w.city)
      $("#weather .condition").text(w.currently)
      $("#weather .temperature .current .value").text(w.temp)
      $("#weather .temperature .high .value").text(w.high)
      $("#weather .temperature .low .value").text(w.low)
    }

function debug(obj){
  console.log(obj)  //console.log fa uscire le cose nella console sotto
}
