//const wochenTag = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

//const wochenTag = [];

// function heuteTag(Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag){
//     if(Montag) {
//         console.log("Heute ist", Montag)
//     }else{
//         console.log("Morgen wird Dienstag")
//     }
//     if(heuteTag == Dienstag) {
//         console.log("Heute ist", Dienstag)
//     }else{
//         console.log("Morgen wird Mittwoch")
//     }
// }

// heuteTag();

function nextDay(wochenTag) {
    if(wochenTag == "Montag"){
        console.log("Dienstag")
    }
    if(wochenTag == "Dienstag"){
        console.log("Mitwoch")
    }
    if(wochenTag == "Mitwoch"){
        console.log("Donerstag")
    }
    if(wochenTag == "Donerstag"){
        console.log("Freitag")
    }
    if(wochenTag == "Freitag"){
        console.log("Samstag")
    }
    if(wochenTag == "Samstag"){
        console.log("Sonntag")
    }
    if(wochenTag == "Sonntag"){
        console.log("Montag")
    }
    if(wochenTag == "Spaßtag"){
        console.log("Unsinnstag")
    }
}


nextDay("Montag");
nextDay("Dienstag");
nextDay("Mitwoch");
nextDay("Donerstag");
nextDay("Freitag");
nextDay("Samstag");
nextDay("Sonntag");
nextDay("Spaßtag");
