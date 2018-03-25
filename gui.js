var id;
var link = "https://llk.github.io/scratch-gui/#<id>";
var type = "g";
if(window.data){
if(window.data.project.id){
link = link.replace("<id>",data.project.id);
location.href = link;
}else if(location.href.startsWith("https://scratch.mit.edu/projects/")){
document.body.style.background = "white";
document.body.innerHTML = "<p style='font-family: Arial;color: red'>Scratch3ify 2: An error occured - please contact <a href='https://scratch.mit.edu/users/kyleplo'>@kyleplo</a> with the error code: <b>l" + type + btoa(location.pathname) + "</b></p>";
}else{
document.body.style.background = "white";
document.body.innerHTML = "<p style='font-family: Arial;color: red'>Scratch3ify 2: This doesn't look like a project page - if you think this is an error, please contact <a href='https://scratch.mit.edu/users/kyleplo'>@kyleplo</a> with the error code: <b>q" + type + btoa(location.pathname) + "</b></p>";
}}else{
document.body.style.background = "white";
document.body.innerHTML = "<p style='font-family: Arial;color: red'>Scratch3ify 2: This doesn't look like a project page - if you think this is an error, please contact <a href='https://scratch.mit.edu/users/kyleplo'>@kyleplo</a> with the error code: <b>r" + type + btoa(location.pathname) + "</b></p>";
}
