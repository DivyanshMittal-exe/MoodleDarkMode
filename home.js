console.log("home");
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

//side buttons
var inps = document.getElementsByClassName("breadcrumb-button")[0].getElementsByTagName("input");
for (var j = 0;j < inps.length; j++) {
    inps[j].style.color="#f0f6fc";
    inps[j].style.backgroundImage="url('https://i.imgur.com/esqBbr2.jpeg')";
    inps[j].style.textShadow="none";
    inps[j].style.border="none";
}

//course tiles
var y = document.getElementsByClassName("well well-small");
for(var i = 0; i<y.length;i++){
    y[i].style.backgroundColor="#21262c";
}

//navigation tiles

var pglinks = document.getElementsByClassName("page-link");
for(var i = 0; i<pglinks.length;i++){
    pglinks[i].style.backgroundColor="#161b22";
    pglinks[i].style.color="#f0f6fc";
    pglinks[i].style.border="none";
}
//name dropdown
document.getElementById("action-menu-0-menu").style.backgroundColor="#21262c";
document.getElementById("action-menu-0-menubar").style.backgroundColor="#090c10";

// top navigation butttons
var buttstop = document.getElementsByClassName("btn btn-default");
for(var i = 0; i<buttstop.length;i++){
    buttstop[i].style.backgroundImage="url('https://i.imgur.com/2P1gXit.jpeg')";
    buttstop[i].style.color="#c9d1d9";
    buttstop[i].style.border="none";
}
document.getElementsByClassName("btn btn-default active")[0].style.border="2px solid #30363d";
document.getElementsByClassName("btn btn-default active")[0].style.backgroundColor="#161b22";
document.getElementsByClassName("btn btn-default active")[0].style.color="#c9d1d9";
document.getElementsByClassName("btn btn-default active")[0].style.textShadow="none";

//also top nav
document.getElementsByClassName("nav-link")[2].style.backgroundColor="#161b22";
document.getElementsByClassName("nav-link")[3].style.backgroundColor="#161b22";
document.getElementsByClassName("nav-link")[2].style.color="#c9d1d9";
document.getElementsByClassName("nav-link")[3].style.color="#c9d1d9";
document.getElementsByClassName("nav-link")[2].style.textShadow="none";
document.getElementsByClassName("nav-link")[3].style.textShadow="none";

imgs = document.getElementsByClassName("block_online_users  block")[0].getElementsByTagName("img");

for(var i = 0; i<imgs.length;i++){
    
    imgs[i].style.borderRadius="50%";
}

// document.getElementsByClassName("btn btn-secondary").style.backgroundImage="url('https://i.imgur.com/esqBbr2.jpeg')";