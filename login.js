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

//Main NavButtons
var mainbar = document.getElementsByClassName("breadcrumb");
mainbar[0].style.backgroundColor="#238636";
mainbar[0].style.textShadow = "none";
mainlinksShadow= mainbar[0].getElementsByTagName("li");
var mainlinks= mainbar[0].getElementsByTagName("a");

for(var i =0 ;i<mainlinks.length;i++){
mainlinks[i].style.color="#c9d1d9";
mainlinksShadow[i].style.color="#c9d1d9";
}

//
b1 = getElementByXpath('//*[@id="loginbtn"]');
b1.style.backgroundColor="#238636";
b1.style.color="#c9d1d9";