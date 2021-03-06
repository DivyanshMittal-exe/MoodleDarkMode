console.log("course");
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

if(document.getElementById("searchforums")){
//top buttons
document.getElementById("searchforums").style.backgroundImage="url('https://i.imgur.com/esqBbr2.jpeg')";
document.getElementById("searchforums").style.color=" #c9d1d9";
document.getElementById("searchforums").style.border="none";
document.getElementById("searchforums").style.textShadow ="none";

}
if(document.getElementById("search")){
document.getElementById("search").style.backgroundColor="#21262c";
}

if(document.getElementsByTagName("td")[0]){
//table
var table = document.getElementsByClassName("discussion r0");
for(var i=0;i<table.length;i++){
    var tabs= table[i].getElementsByTagName("td");
    for(var j=0;j<tabs.length;j++){
    tabs[j].style.backgroundColor="#21262c";

    }
}

var tableo = document.getElementsByClassName("discussion r1");
for(var i=0;i<tableo.length;i++){
    var tabso= tableo[i].getElementsByTagName("td");
    for(var j=0;j<tabs.length;j++){
    tabso[j].style.backgroundColor="#0d1117";
    }
}

var tableheader = document.getElementsByTagName("th");
for(var i=0;i<tableheader.length;i++){
  tableheader[i].style.backgroundColor="#0d1117";
}


if(document.getElementsByClassName("forumheaderlist")[0]){
var tablelinks = document.getElementsByClassName("forumheaderlist")[0].getElementsByTagName("a");
for(var j=0;j<tablelinks.length;j++){
    tablelinks[j].style.color="#c9d1d9";
    }
  }

  }

// dropdowns
document.getElementById("jump-to-activity").style.backgroundColor="#21262c";


//quizzes
if(document.getElementsByClassName("info")[0]){
    var infoquiz = document.getElementsByClassName("info")
      for(var i = 0; i<infoquiz.length;i++){
        infoquiz[i].style.backgroundColor="#0d1117";
        infoquiz[i].style.color="#c9d1d9";
  }
  }

  if(document.querySelectorAll("[role='region']")[0]){
    var rolereg = document.querySelectorAll("[role='region']");
      for(var i = 0; i<rolereg.length;i++){
        rolereg[i].style.backgroundColor="#0d1117";
        rolereg[i].style.color="#c9d1d9";
  }
  }


// quiz
  if(document.getElementsByClassName("info")[0]){
    var qtiles = document.getElementsByClassName("info");
      for(var i = 0; i<qtiles.length;i++){
        qtiles[i].style.backgroundColor="#0d1117";
        qtiles[i].style.color="#c9d1d9";
  }
  }