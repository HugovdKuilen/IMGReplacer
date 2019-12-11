// ==UserScript==
// @name         IMGReplacer
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

function refreshall(){
    var allImages = document.getElementsByTagName('img');

    for(var i = 0; i < allImages.length ; i++) {
        // to open all photos in new tabs:
        // window.open(allImages[i].src, '_blank');
        allImages[i].src = 'https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=300&quality=85&auto=format&fit=max&s=02632218051da209be64b27e96722c43';
    }
}

(function() {
    'use strict';
    var script = document.createElement("script");
    script.innerHTML = "var url = 'https://i.guim.co.uk/img/media/327e46c3ab049358fad80575146be9e0e65686e7/0_0_1023_742/master/1023.jpg?width=300&quality=85&auto=format&fit=max&s=02632218051da209be64b27e96722c43';\
    function refreshall(){\
    var allImages = document.getElementsByTagName('img');\
    for(var i = 0; i < allImages.length ; i++) {\
        allImages[i].src = url;\
    }\
}\
function setvar(newurl){url = newurl; refreshall();}";
    document.body.appendChild(script);
    var URLI = document.createElement("input");
    URLI.setAttribute("type", "text");
    URLI.setAttribute("style", "position:fixed;top:0px;left:100px;z-index:999;");
    URLI.setAttribute("id", "urlinputthingimgreplacer");
    URLI.setAttribute("placeholder", "Url of image here...");
    document.body.appendChild(URLI);
    var RBTN = document.createElement("button");
    RBTN.setAttribute("onclick", "setvar(document.getElementById('urlinputthingimgreplacer').value);");
    RBTN.setAttribute("style", "position:fixed;top:0px;left:0px;z-index:999;");
    RBTN.innerHTML = "Refresh";
    document.body.appendChild(RBTN);
    refreshall();
})();