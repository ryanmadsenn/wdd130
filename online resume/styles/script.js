function myFunction() {
    var x = document.getElementById("nav-buttons");
    var menu_icon = document.getElementById("icon");

    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }    
}


function checkWidth() {
    console.log("yeet");

    var x = document.getElementById("nav-buttons");
    var window_width = window.innerWidth;
    var menu_icon = document.getElementById("icon");

    if (window_width < 900) {
        menu_icon.style.display = "block"
        x.style.display = "none";
    } else {
        menu_icon.style.display = "none";
        x.style.display = "block";
    }
}