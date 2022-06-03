
document.querySelector(".moon").addEventListener("click",function(){
darkMode();
changeIcon();
})


function darkMode (){
  for (var i = 0; i <   document.querySelectorAll("a").length; i++) {
    document.querySelectorAll("a")[i].classList.toggle("a-darkmode");
  }
  document.querySelector("body").classList.toggle("dark");
  for (var i = 0; i < document.querySelectorAll("h5").length; i++) {
  document.querySelectorAll("h5")[i].classList.toggle("h5dark");
}

document.querySelector("footer").classList.toggle("dark");
for (var i = 0; i < document.querySelectorAll("h6").length; i++) {
document.querySelectorAll("h6")[i].classList.toggle("h5dark");
}
}
function changeIcon(){
  document.querySelector(".moon").classList.toggle("fa-screwdriver-wrench")
}
