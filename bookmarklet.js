var scratch3ify = {};
scratch3ify.version = 1.0;
scratch3ify.getProjectId = function (url){if(isNaN(url.charAt(url.lastIndexOf("/") - 1))){return url.slice(33)}else{return url.slice(33,url.lastIndexOf("/"))}};
scratch3ify.alert = function (txt){alert("Scratch3ify: " + txt)};
scratch3ify.prompt = function (txt,def){return prompt("Scratch3ify: " + txt,def)};
scratch3ify.yesorno = function (txt){return confirm("Scratch3ify: " + txt)};
if(localStorage.scratch3ify){scratch3ify.data = JSON.parse(localStorage.scratch3ify)}else{scratch3ify.data = {}};
scratch3ify.save = function (){localStorage.scratch3ify = JSON.stringify(scratch3ify.data)};
scratch3ify.open = function (hasNoId){
if(scratch3ify.data.view){
if(hasNoId){scratch3ify.id = ""}else{scratch3ify.id = scratch3ify.getProjectId(location.href)};
if(scratch3ify.data.view === "preview"){location.href = "https://preview.scratch.mit.edu/#" + scratch3ify.id};
if(scratch3ify.data.view === "develop"){location.href = "https://llk.github.io/scratch-gui/develop#" + scratch3ify.id};
if(scratch3ify.data.view === "vm"){location.href = "https://llk.github.io/scratch-vm#" + scratch3ify.id};
if(scratch3ify.data.view === "phosphorus"){location.href = "https://phosphorus.github.io/#" + scratch3ify.id};
}else{
if(document.getElementById("description").innerHTML.indexOf(":scratch3ify:") > -1){
scratchify.view = document.getElementById("description").innerHTML.slice(document.getElementById("description").innerHTML.indexOf(":scratch3ify:") + 13,document.getElementById("description").innerHTML.lastIndexOf(":scratch3ify:"));
if(hasId){scratch3ify.id = ""}else{scratch3ify.id = scratch3ify.getProjectId(location.href)};
if(scratch3ify.view === "preview"){location.href = "https://preview.scratch.mit.edu/#" + scratch3ify.id};
if(scratch3ify.view === "develop"){location.href = "https://llk.github.io/scratch-gui/develop#" + scratch3ify.id};
if(scratch3ify.view === "vm"){location.href = "https://llk.github.io/scratch-vm#" + scratch3ify.id};
if(scratch3ify.view === "phosphorus"){location.href = "https://phosphorus.github.io/#" + scratch3ify.id};
if(scratch3ify.view === "sulfurous"){location.href = "https://sulfurous.aau.at/#" + scratch3ify.id};
if(scratch3ify.view === "blocks"){location.href = "http://scratchblocks.github.io/generator/#project=" + scratch3ify.id};
}else{
scratch3ify.view = scratch3ify.prompt("Do you want to open the preview, develop branch, VM, Phosphorus, Sulfurous or Scratch blocks?\nType preview, develop, vm, phosphorus, sulfurous or blocks.","preview");
if(scratch3ify.data.everytime){
if(scratch3ify.prompt("Do you want to open " + scratch3ify.data.view+ " every time you use scratch3ify?")){scratch3ify.data.view = scratch3ify.view}else{
scratch3ify.data.everytime = false;
}};
scratch3ify.save();
if(hasId){scratch3ify.id = ""}else{scratch3ify.id = scratch3ify.getProjectId(location.href)};
if(scratch3ify.view === "preview"){location.href = "https://preview.scratch.mit.edu/#" + scratch3ify.id};
if(scratch3ify.view === "develop"){location.href = "https://llk.github.io/scratch-gui/develop#" + scratch3ify.id};
if(scratch3ify.view === "vm"){location.href = "https://llk.github.io/scratch-vm#" + scratch3ify.id};
if(scratch3ify.view === "phosphorus"){location.href = "https://phosphorus.github.io/#" + scratch3ify.id};
if(scratch3ify.view === "sulfurous"){location.href = "https://sulfurous.aau.at/#" + scratch3ify.id};
if(scratch3ify.view === "blocks"){location.href = "http://scratchblocks.github.io/generator/#project=" + scratch3ify.id};
}}
};
if(location.host = "kyleplo.github.io" && location.pathname.startsWith("/scratch3ify-2/")){
scratch3ifyExists(scratch3ify.version);
}else{
if(location.host = "scratch.mit.edu" && location.pathname.startsWith("/projects/")){
scratch3ify.open();
}else{
if(scratch3ify.data.noscratch){
scratch3ify.open(true)
}else{
scratch3ify.data.noscratch = scratch3ify.yesorno("This is not a Scratch project page.\nDo you want to open Scratch 3.0 in the future if you do this?");
scratch3ify.save();
if(scratch3ify.data.noscratch){
scratch3ify.open(true);
}else{
location.href = location.href
};
}
}}
