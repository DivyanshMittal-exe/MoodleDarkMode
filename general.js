console.log("general");
var i=0;

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  }

document.body.style.backgroundColor = "#090c10";
document.body.style.color="#c9d1d9";

//Links
var links = document.getElementsByTagName("a");
for(i=0;i<links.length;i++){
    links[i].style.color="#58a6ff";
}

//Header color
var header = document.getElementsByClassName("container-fluid");
header[0].style.backgroundColor="#090c10";
header[0].style.color="#c9d1d9";
document.getElementsByClassName("navbar navbar-fixed-top moodle-has-zindex")[0].style.backgroundColor="#090c10";

//Header title
document.getElementsByClassName("brand")[0].style.textShadow="none";


//Main NavButtons
var mainbar = document.getElementsByClassName("breadcrumb");
mainbar[0].style.backgroundColor="#238636";
mainbar[0].style.textShadow = "none";
mainlinksShadow= mainbar[0].getElementsByTagName("li");
var mainlinks= mainbar[0].getElementsByTagName("a");

for(var i =0 ;i<mainlinks.length;i++){
mainlinks[i].style.color="#c9d1d9";
mainlinksShadow[i].style.textShadow="none";
}

for(var i =0 ;i<mainlinksShadow.length;i++){
  mainlinksShadow[i].style.textShadow="none";
}

//main panel
var panels = document.querySelectorAll("[role='navigation']");
for(var i = 0; i<panels.length;i++){
    panels[i].style.backgroundColor="#0d1117";
}
//side panel
var panelsSde = document.querySelectorAll("[role='complementary']");
for(var i = 0; i<panelsSde.length;i++){
    panelsSde[i].style.backgroundColor="#0d1117";
}

//name dropdown
document.getElementById("action-menu-0-menu").style.backgroundColor="#21262c";
document.getElementById("action-menu-0-menubar").style.backgroundColor="#090c10";