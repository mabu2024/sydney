const LIST_ID_MENU = [
    "area-menu-box",
    "recent-area-menu-box",
    "image-menu-box",
    "video-menu-box",
    "support-menu-box",
]
function toggleMenu(id) {
    console.log("toggleMenu", id);
    var submenu = document.getElementById(id);
    console.log(submenu);
    if (submenu.style.display === "none") {
        submenu.style.display = "block";
    }

    for (var i = 0; i < LIST_ID_MENU.length; i++) {
        if (LIST_ID_MENU[i] !== id) {
            var submenu = document.getElementById(LIST_ID_MENU[i]);
            submenu.style.display = "none";
        }
    }
}