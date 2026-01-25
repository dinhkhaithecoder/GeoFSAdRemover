// ==UserScript==
// @name         GeoFS GPWS Alerts
// @namespace    https://avramovic.info/
// @version      1.0.7
// @description  GPWS and other alerts for GeoFS
// @author       Win8ChanBoy
// @match        https://www.geo-fs.com/geofs.php?v=3.9
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geo-fs.com
// ==/UserScript==

function removeElementsByClass(className){
    const elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
removeElementsByClass("geofs-adbanner geofs-adsense-container");
