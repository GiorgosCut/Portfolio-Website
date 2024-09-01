document.getElementById("menu-toggle").addEventListener("click", function(){
    let nav = document.getElementById("nav-list");
    if(nav.style.display === "flex"){
        nav.style.display = "none";
    }else{
        nav.style.display = "flex";
    }
});