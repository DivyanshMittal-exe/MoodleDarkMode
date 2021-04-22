console.log("start");
document.body.style.backgroundColor = "#090c10";
document.body.style.color="#c9d1d9";

document.getElementsByClassName("container-fluid")[0].style.backgroundColor="#0d1117";

var links = document.getElementsByTagName("a");
for(var i = 0; i<links.length;i++){
    links[i].style.color="#58a6ff";
}

mnav= document.getElementsByClassName("breadcrumb");
mnav[0].setAttribute("style", "background-color: #238636; text-shadow: none;color :#f0f6fc; border: white;");

mnavts = mnav[0].getElementsByTagName("li");
for(var i = 0; i<mnavts.length;i++){
    mnavts[i].style.textShadow = "none";
}

var pgnav =document.getElementById("pb-for-in-progress").getElementsByTagName("ul");
pgnav[0].style.backgroundColor="#238636";
var pgnava = pgnav[0].getElementsByTagName("a");
for(var i = 0; i<pgnava.length;i++){
    pgnava[i].style.color="#f0f6fc ";
    pgnava[i].style.backgroundColor="#238636";
}

var mnavlink=mnav[0].getElementsByTagName("a");
for(var i = 0; i<mnavlink.length;i++){
    mnavlink[i].style.color="#f0f6fc ";
}

var inp = document.getElementsByTagName("input")[0];
if(inp[0]){
    for(var i = 0; i<inp.length;i++){
        inp[i].style.color="#0d1117";
    }
} 
var topele = document.getElementsByClassName("btn-group m-b-1")[0].getElementsByTagName("a");
for(var i = 0; i< topele.length; i++){
    topele[i].style.color="#f0f6fc ";
    topele[i].style.backgroundColor="#238636";
}











var inps = document.getElementsByClassName("breadcrumb-button")[0].getElementsByTagName("input");

        for (var j = 0;j < inps.length; j++) {
            //inps[j].style.color="#f0f6fc";
            inps[j].style.backgroundImage="url('https://miro.medium.com/max/875/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg')";
           
        }


var x = document.getElementsByClassName("section main clearfix current");
if(x[0]){x[0].style.backgroundColor="#21262c";}

var x = document.getElementsByTagName("h2");
for(var i = 0; i<x.length;i++){
    x[i].style.color="#c9d1d9";
}
console.log("start2");

var y = document.getElementsByClassName("well well-small");
for(var i = 0; i<y.length;i++){
    y[i].style.backgroundColor="#21262c";
}

var panels = document.querySelectorAll("[role='navigation']");
for(var i = 0; i<panels.length;i++){
    panels[i].style.backgroundColor="#0d1117";
}

var panelsSde = document.querySelectorAll("[role='complementary']");
for(var i = 0; i<panelsSde.length;i++){
    panelsSde[i].style.backgroundColor="#0d1117";
}



var listbttn = document.getElementsByTagName("nav");
for(var i = 0; i<listbttn.length;i++){
    listbttn[i].style.backgroundColor="#0d1117";
}
