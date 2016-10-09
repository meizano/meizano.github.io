function removePage(){
    var allpage = document.querySelectorAll(".page");
    for(var i = 0; i < allpage.length; i++)
        {
            allpage[i].style.display = "none";
        }
}

var about = document.querySelector("div#about");
var projects = document.querySelector("div#projects");
var contact = document.querySelector("div#contact");

about.style.display ="inline-block";

var aboutbtn = document.querySelector("a#about");
var projectsbtn = document.querySelector("a#projects");
var contactbtn = document.querySelector("a#contact");



aboutbtn.addEventListener("click", function(){
    removePage();
    about.style.display ="inline-block";
});
projectsbtn.addEventListener("click", function(){
    removePage();
    projects.style.display ="inline-block";
});
contactbtn.addEventListener("click", function(){
    removePage();
    contact.style.display ="inline-block";
});
