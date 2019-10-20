/* =============================================================================

============================================================================= */


function mainOverlayClick(){
  const body = document.getElementsByTagName('body')[0];
  if (body.classList.contains("open")){
    toggleMenu();
  }
}


function toggleMenu(){
  const body         = document.getElementsByTagName('body')[0];
  const main_overlay = document.getElementsByClassName('main-overlay')[0];


  if (!body.classList.contains("open")) {
    body.classList.add("open");
    main_overlay.style.display = "block";
    //We need to give display = "block" sufficient time to take effect before
    //adding .active (in order for the transition to work);
    setTimeout(() => {main_overlay.classList.add('active');}, 100);


  } else {
    body.classList.remove("open");
    main_overlay.classList.remove('active');
    //Set it back to display: block once the fading transition is complete.
    setTimeout(() => { main_overlay.style.display = "none"; }, 350);
  }
}


/* =============================================================================
                            Initialize!!!
============================================================================= */


function init() {
  const menu_toggle  = document.getElementById("menu-toggle");
  const main_overlay = document.getElementsByClassName('main-overlay')[0];
  menu_toggle.addEventListener("click",  toggleMenu);
  main_overlay.addEventListener("click", toggleMenu);
}


window.onload = function(){
  //console.log(document.readyState); //complete
  init();
}
