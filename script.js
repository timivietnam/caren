var appName = "Caren";
var storeUrl = "https://1.envato.market/1YaMm";
var date = "2022-03-23";

function onIndexLoad() {
  document.title = appName;
  document.getElementById("storeUrl").href = storeUrl;
}

function onPolicyLoad() {
  document.title = appName + " " + "Privacy Policy";
  getData();
}

function onTermLoad() {
  document.getElementById("appName2").innerHTML = appName;
  document.title = appName + " " + "Terms and Conditions";
  getData();
}

function getData() {
  document.getElementById("appName").innerHTML = appName;
  document.getElementById("date").innerHTML = date;
}
