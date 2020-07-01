function openNav() {
    document.getElementById("sideNavigation").style.width = "100%";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0px";
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myEducation() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function myTools() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function myProjects() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

function myInterests() {
    document.getElementById("myDropdown4").classList.toggle("show");
}