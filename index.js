function morgenIst(wochenTag) {
    if (wochenTag == "Montag") {
        console.log("Nach", wochenTag, "kommt Dienstag");
    }
     if (wochenTag == "Dienstag") {
         console.log("Nach", wochenTag, "kommt Mittwoch");
     }
     if (wochenTag == "Mittwoch") {
         console.log("Nach", wochenTag, "kommt Donnerstag");
     }
     if (wochenTag == "Donnerstag") {
         console.log("Nach", wochenTag, "kommt Freitag");
     }
     if (wochenTag == "Freitag") {
         console.log("Nach", wochenTag, "kommt Samstag");
     }
     if (wochenTag == "Samstag") {
         console.log("Nach", wochenTag, "kommt Sonntag");
     }
      if (wochenTag == "Sonntag") {
          console.log("Nach", wochenTag, "kommt Montag");
      }
        if (wochenTag == "Unsinntag") {
            console.log("Nach", wochenTag, "kommt Spaßtag");
        }

}

morgenIst("Dienstag");
morgenIst("Sonntag");
morgenIst("Unsinntag");