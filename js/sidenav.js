function openNav() {
     var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
