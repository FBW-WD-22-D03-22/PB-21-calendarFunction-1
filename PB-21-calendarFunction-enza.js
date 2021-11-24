// Aufgabenstellung - Teil 1
/*
const wochenTage = ["Montag" , "Dienstag" , "Mittwoch" , "Donnerstag" ,"Freitag" ,"Samstag" , "Sonntag"];

function nextDay("Montag");{
    console.log(wochenTage [4])
}
nextDay();

 fuktion findet den nächsten wochentag */


function nextDAY (wochentag) {


    if(wochentag == "Montag") {
        console.log("Dienstag");
    }
    if(wochentag == "Dienstag") {
        console.log("Mittwoch");
    }
    if(wochentag == "Mittwoch") {
        console.log("Donnerstag");
    }
    if(wochentag == "Donnerstag") {
        console.log("Freitag");
    }
    if(wochentag == "Freitag") {
        console.log("Samstag");
    }
    if(wochentag == "Samstag") {
        console.log("Sonntag");
    }
    if(wochentag == "Sonntag") {
        console.log("Montag");
    }  
// Aufgabenstellung - Teil 2 
if(wochentag == "Spaßtag") {
    console.log("Unsinntag");
}        
}

nextDAY("Sonntag");
nextDAY("Spaßtag");

