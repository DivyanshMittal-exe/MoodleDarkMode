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

//textboxes

if(document.getElementsByTagName("input")[0]){
  var inpis = document.getElementsByTagName("input")
    for(var i = 0; i<inpis.length;i++){
      inpis[i].style.backgroundColor="#0d1117";
      inpis[i].style.color="#c9d1d9";
}
}

if(document.querySelectorAll("[type='submit']")[0]){
  var buttons = document.querySelectorAll("[type='submit']");
    for(var i = 0; i<buttons.length;i++){
      
      buttons[i].style.color="#c9d1d9";
      buttons[i].style.border="none";
      buttons[i].style.textShadow="none";
      buttons[i].style.backgroundImage="url('https://i.imgur.com/esqBbr2.jpeg')";

}
}

if(document.getElementsByTagName("select")[0]){
  var selectinps = document.getElementsByTagName("select")
    for(var i = 0; i<selectinps.length;i++){
      selectinps[i].style.backgroundColor="#0d1117";
      selectinps[i].style.color="#c9d1d9";
}
}

if(document.getElementsByTagName("td")[0]){
  var tblegen = document.getElementsByTagName("td")
    for(var i = 0; i<tblegen.length;i++){
      tblegen[i].style.backgroundColor="#0d1117";
      tblegen[i].style.color="#c9d1d9";
}
}

if(document.querySelectorAll("[role='region']")[0]){
  var rolereg = document.querySelectorAll("[role='region']");
    for(var i = 0; i<rolereg.length;i++){
      rolereg[i].style.backgroundColor="#0d1117";
      rolereg[i].style.color="#c9d1d9";
      rolereg[i].getElementsByTagName("img")[0].style.borderRadius="50%";
      
}
}

if(document.getElementById("fgroup_id_buttonar")){
  document.getElementById("fgroup_id_buttonar").style.backgroundColor="#090c10";
}