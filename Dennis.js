console.log("calendarFunction");




function nextDay(wochenTag) {
    if (wochenTag == "Montag") {
        console.log("Dienstag");
    }

    
    if (wochenTag == "Dienstag") {
      console.log("Mittwoch");
    }


    if (wochenTag == "Mittwoch") {
      console.log("Donnerstag");
   }


   if (wochenTag == "Donnerstag") {
      console.log("Freitag");
   }


   if (wochenTag == "Samstag") {
      console.log("Sonntag");
   }

    if (wochenTag == "Spaßtag") {
      console.log("Unsinnstag");
    }

}        
    
nextDay("Montag");
nextDay("Dienstag");
nextDay("Mittwoch");
nextDay("Donnerstag");
nextDay("Freitag");
nextDay("Samstag");
nextDay("Sonntag");
nextDay("Spaßtag");
nextDay("Unsinnstag")


