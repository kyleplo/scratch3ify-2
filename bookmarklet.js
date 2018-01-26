var scratch3ify = {};
scratch3ify.getProjectId = function (url){if(isNaN(url.charAt(url.lastIndexOf("/") - 1))){return url.slice(33)}else{return url.slice(33,url.lastIndexOf("/"))}};
scratch3ify.alert = function (txt){alert("Scratch3ify: " + txt)};
scratch3ify.prompt = function (txt,def){return prompt("Scratch3ify: " + txt,def)};
scratch3ify.yesorno = function (txt){return confirm("Scratch3ify: " + txt)};
if(localStorage.scratch3ify){scratch3ify.data = JSON.parse(localStorage.scratch3ify)}else{scratch3ify.data = {}};
scratch3ify.save = function (){localStorage.scratch3ify = JSON.stringify(scratch3ify.data)};
scratch3ify.open = function (hasId){
if(scratch3ify.data.view){
if(hasId){scratch3ify.id = ""}else{scratch3ify.id = scratch3ify.getProjectId(location.href)};
if(scratch3ify.data.view === "preview"){location.href = "https://preview.scratch.mit.edu/#" + scratch3ify.id};
if(scratch3ify.data.view === "develop"){location.href = "https://llk.github.io/scratch-gui/develop#" + scratch3ify.id};
if(scratch3ify.data.view === "vm"){location.href = "https://llk.github.io/scratch-vm#" + scratch3ify.id};
if(scratch3ify.data.view === "phosphorus"){location.href = "https://phosphorus.github.io/#" + scratch3ify.id};
}else{
scratch3ify.data.view = scratch3ify.prompt("Do you want to open the preview, develop branch, VM or Phosphorus?\nType preview, develop, vm or phosphorus.");
scratch3ify.save();
}
};
if(location.host = "scratch.mit.edu" && location.pathname.startsWith("/projects/")){

}else{
if(scratch3ify.data.noscratch){
scratch3ify.open(true)
}else{
scratch3ify.data.noscratch = scratch3ify.yesorno("This is not a Scratch project page.\nDo you want to open Scratch 3.0 in the future if you do this?");
scratch3ify.save();
}
}
