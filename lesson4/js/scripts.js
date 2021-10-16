function toggleMenu() {
    //console.log(document.getElementById("firstmenu").classList);//
    document.getElementById("firstmenu").classList.toggle("hide");

    document.getElementById("date").textContent = new Date(date-string);
}