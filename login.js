console.log("login");
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

//login-button
document.getElementById("loginbtn").style.backgroundImage= "url('https://i.imgur.com/esqBbr2.jpeg')";
document.getElementById("loginbtn").style.color = "#c9d1d9";
document.getElementById("loginbtn").style.textShadow = "none";
document.getElementById("loginbtn").style.border="none"

//forms
document.getElementById("username").style.backgroundColor="#21262d";
document.getElementById("username").style.color="#c9d1d9";
document.getElementById("valuepkg3").style.backgroundColor="#21262d";
document.getElementById("valuepkg3").style.color="#c9d1d9";

//guest button
var guestbut = document.getElementsByClassName("guestform")[0];
guestbut.getElementsByTagName("input")[2].style.backgroundImage="url('https://i.imgur.com/esqBbr2.jpeg')";
guestbut.getElementsByTagName("input")[2].style.color="#c9d1d9";
guestbut.getElementsByTagName("input")[2].style.textShadow = "none";
guestbut.getElementsByTagName("input")[2].style.border="none"