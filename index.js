

function wocheenTag(montag,mittwoch,donnerstag,freitag,samstag,sonntag,Spaßtag) {
    sonntag=true;
    if(sonntag){
        console.table(["Montag"]);
    }
      montag=true;
      if (montag) {
          console.table(["Dienstag"]);
      }
      dienstag=true;
      if (dienstag) {
          console.table(["Mittwoch"]);
      }
      mittwoch=true;
      if (mittwoch) {
          console.table(["Donnerstag"]);
      }
      donnerstag=true;
      if (donnerstag) {
          console.table(["Freitag"]);
      }
      freitag=true;
      if (freitag) {
          console.table(["Samstag"]);
      }
      samstag=true;
      if (samstag) {
          console.table(["Sonntag"]);
      }
  }
  Spaßtag=true;
  if (Spaßtag) {
      console.log(["Unsinntag"]);
  }


  wocheenTag();