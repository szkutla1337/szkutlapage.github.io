var sideNavBar = document.querySelector("#sideNavBar");
var dropDownButton = document.querySelector("#dropDownButton")
var sideBarA1 = document.querySelector("#sideBarA1");
var sideBarA2 = document.querySelector("#sideBarA2");
var sideBarA3 = document.querySelector("#sideBarA3");
var navBarLogo = document.querySelector("#navBarLogo");

dropDownButton.addEventListener("click", function(){
    sideNavBar.style.left = "0";
    sideBarA1.style.width = "236px";
    sideBarA2.style.width = "236px";
    sideBarA3.style.width = "236px";
    sideNavBar.style.visibility = "visible";
});

document.addEventListener("click", function(event){
    if (!sideNavBar.contains(event.target) && window.getComputedStyle(sideNavBar).visibility == "visible"){
        sideNavBar.style.left = "-300px"
        sideNavBar.style.visibility = "hidden";
    }
});

navBarLogo.addEventListener("click", function(){
    window.location.href = "index.html";
});