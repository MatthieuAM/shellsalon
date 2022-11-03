//---------------------------
//let togg1 = document.getElementById("togg1");
//let togg2 = document.getElementById("togg2");
//let d1 = document.getElementById("d1");
//let d2 = document.getElementById("d2");
//togg1.addEventListener("click", () => {
// if(getComputedStyle(d1).display != "none"){
//d1.style.display = "none";
//} else {
//d1.style.display = "block";
//}
//})

//function togg(){
//if(getComputedStyle(d2).display != "none"){
//d2.style.display = "none";
//} else {
//d2.style.display = "block";
// }
//};
//togg2.onclick = togg;




//function switchInfoPerso()
//{
//divInfo = document.getElementById('divacacher');
//if (divInfo.style.display == 'none')
//divInfo.style.display = 'block';
//else
//divInfo.style.display = 'block';
//}



function visibilite(thingId) {
  var targetElement;
  var elements;
  targetElement = document.getElementById(thingId);

  // recupere tous les elements ayant pour nom de classe "Element"
  elements = document.getElementsByClassName("Element")

  // parcoure tous ces elements et les cache
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
  }

  //affiche uniquement l element selectionné
  if (targetElement.style.display == "none") {
    targetElement.style.display = "";
  }

}

var div = document.getElementById("Epilation");
var mains = document.getElementById("Soinsmains");
var ongles = document.getElementById("Ongles");
var extongles = document.getElementById("agrandirongles");
var allhomme = document.getElementById("soinshomme")

function togg() {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "block";
  }
}

function menumains() {
  if (mains.style.display === "none") {
    mains.style.display = "block";
  } else {
    mains.style.display = "block";
  }

}

function menuongle() {
  if (ongles.style.display === "none") {
    ongles.style.display = "block";
  } else {
    ongles.style.display = "block";
  }

}

function menuextensionongle() {
  if (extongles.style.display === "none") {
    extongles.style.display = "block";
  } else {
    extongles.style.display = "block";
  }

}

function menusoinshomme() {
  if (allhomme.style.display === "none") {
    allhomme.style.display = "block";
  } else {
    allhomme.style.display = "block";
  }

}







// -----------Popup------------

// function display(id) {

//   if (document.getElementById(id).style.display == "none") 

//     document.getElementById(id).style.display = "block";   

//   else document.getElementById(id).style.display = "none";
// }

// document.querySelector( " div.pop > a" ).addEventListener( 'click', function( ev ){
 //  ev.preventDefault();
  // ev.stopPropagation();

 //  displayMonTexte();
// });



'use strict';
 
// Soin 1
document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});





// Soin 2
document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup2" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup2" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop2 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 3

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup3" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup3" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop3 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});



// Soin 4

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup4" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup4" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop4 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 5

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup5" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup5" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop5 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 6

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup6" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup6" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop6 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});





// Soin 7

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup7" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup7" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop7 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 8

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup8" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup8" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop8 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});



// Soin 9

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup9" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup9" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop9 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 10

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup10" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup10" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop10 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 11

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup11" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup11" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop11 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 12

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup12" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup12" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop12 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 13

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup13" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup13" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop13 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 14

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup14" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup14" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop14 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 15

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup15" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup15" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop15 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 16

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup16" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup16" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop16 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


//---------------------------------//
//---------------------------------//
//---------------------------------//
// Soin des main et Visage
//---------------------------------//



// Soin 17

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup17" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup17" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop17 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 18

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup18" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup18" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop18 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 19

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup19" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup19" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop19 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 20

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup20" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup20" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop20 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 21

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup21" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup21" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop21 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 22

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup22" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup22" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop22 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 23

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup23" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup23" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop23 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 24

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup24" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup24" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop24 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 25

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup25" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup25" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop25 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 26

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup26" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup26" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop26 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 27

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup27" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup27" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop27 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 28

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup28" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup28" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop28 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 29

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup29" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup29" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop29 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 30

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup30" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup30" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop30 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 31

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup31" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup31" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop31 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});



//---------------------------------//
//---------------------------------//
//---------------------------------//
// BAR A ONGLES
//---------------------------------//


// Soin 32

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup32" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup32" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop32 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 33

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup33" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup33" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop33 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 34

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup34" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup34" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop34 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 35

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup35" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup35" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop35 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 36

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup36" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup36" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop36 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 37

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup37" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup37" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop37 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 38

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup38" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup38" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop38 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 39

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup39" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup39" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop39 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 41

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup41" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup41" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop41 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 42

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup42" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup42" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop42 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});

// Soin 43

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup43" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup43" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop43 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 44

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup44" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup44" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop44 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 45

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup45" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup45" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop45 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 46

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup46" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup46" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop46 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});


// Soin 47

document.addEventListener( 'DOMContentLoaded', function( ev ){
  
  document.querySelector( "#text-popup47" ).style.display = "none";
  
});

window.addEventListener( 'load', function( ev ){
  
  function displayMonTexte(){
    const
      elemMonTexte = document.querySelector( "#text-popup47" );
      
    if ( elemMonTexte.style.display === "none" ) { 
      elemMonTexte.style.display = "block";    
    } else {
      elemMonTexte.style.display = "none";
    }
  }
  
  document.querySelector( "div.pop47 > a" ).addEventListener( 'click', function( ev ){
    ev.preventDefault();
    ev.stopPropagation();
    
    displayMonTexte();
  });
  
});