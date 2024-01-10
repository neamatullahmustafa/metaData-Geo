let latitude, longitude, windowScreen, idWatch,
worker = new Worker("worker.js"),
sum = document.getElementById("sum"),
 bg = document.getElementById("bg");
function openCurrentLocation() {
  console.log("openCurrentLocation");
  idWatch = navigator.geolocation.watchPosition(
    showPosition,
    ErrorDetection,
    moreOption
  );
}
function showPosition(position) {
  console.log("showPosition");
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  console.log(window);
  windowScreen = window.open(
    `http://maps.google.com/maps?q=${latitude},+${longitude}`,
    "windowScreen",
    "width=500,height=500"
  );
  displayGeo();
}
function closeCurrentLocation() {
  console.log("closeCurrentLocation");
  navigator.geolocation.clearWatch(idWatch);
  console.log(windowScreen);
  windowScreen.close();
 
}
function displayGeo() {
  openCurrentLocation();
  document.getElementById("latitude").content = latitude;
  document.getElementById("longitude").content = longitude;
  console.log(document.getElementById("latitude"));
  console.log(document.getElementById("longitude"));
}
function ErrorDetection(x) {
  console.log(x);
  switch (x.code) {
    case 0:
      console.log(`unknown error  + ${x.message}`);
      break;
    case 1:
      console.log(`permission denied + ${x.message}`);
      break;
    case 2:
      console.log(`position unavailable" + ${x.message}`);
      break;
    case 3:
      console.log(`timeout + ${x.message}`);
      break;
  }
}
let moreOption = {
  enableHighAccuracy: true,
};

function work() {
  sum.addEventListener("click", function () {
      worker.postMessage("")
  })
  worker.onmessage = function (message) {
      console.log(message);
      alert(message.data);
  }


  bg.addEventListener("click", function () {
      if (document.body.style.background !== 'black') {
          document.body.style.background = "black";
      } else {
          document.body.style.background = "white";

      }
  })
  
}work()
