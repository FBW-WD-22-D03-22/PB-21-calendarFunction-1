function nextDay(wochentag) {
   
    if (wochentag == "Montag" || wochentag == "Spaßtag") {
        console.log("Dinstag");
    } else {
        console.log("Unsinnstag");
    }
    
    if(wochentag == "Dinstag"){
        console.log("Mitwoch");   
    }

    if (wochentag == "Mitwoch") {
        console.log("Dönerstag");
    }
    
    if(wochentag == "Dönerstag"){
        console.log("Freitag");   
    }

    if (wochentag == "Freitag") {
        console.log("Samstag");
    }
    
    if(wochentag == "Samstag"){
        console.log("Sontag");   
    }

    if (wochentag == "Sontag") {
        console.log("Montag");
    }
}

nextDay("Spastag");