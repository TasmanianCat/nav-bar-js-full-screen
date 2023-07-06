/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBarFunction() {
    var x = document.getElementById("nav__Bar");
    if (x.className === "divnav") {
        x.className += " responsive";
        console.log("The Nav Bar Icon was clicked!");
    } else {
        x.className = "divnav";
    }
    const barIcon = document.getElementById('iconB');
    barIcon.classList.toggle('fa-xmark');
    barIcon.classList.toggle('fa-bars');
    document.body.classList.toggle('lock-scroll');

}