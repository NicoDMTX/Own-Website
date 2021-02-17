const div = document.createElement('div')

function faireQqcALAncienne(successCallback, failureCallback){
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
      successCallback("Réussite");
    } else {
      failureCallback("Échec");
    }
  }
  
  function successCallback(résultat) {
    
  }
  
  
  function failureCallback(erreur) {
    console.error("L'opération a échoué avec le message : " + erreur);
  }
  
  faireQqcALAncienne(successCallback, failureCallback);