# calendarFunction

## Aufgabenstellung - Teil 1
Schreibe eine Funktion, die einen Wochentag als Parameter akzeptiert und den darauffolgenden Wochentag als Ergebnis ausschreibt.

Beispiel: Die Funktion wird mit dem Wochentag Montag ausgeführt -> Das Ergebnis ist Dienstag.

Beispiel: Die Funktion wird mit dem Wochentag Sonntag ausgeführt -> Das Ergebnis ist Montag.

## Aufgabenstellung - Teil 2
Im Moment kann deine Funktion nur gültige Wochentage annehmen. Erweitere deine Funktion so, dass sie "Unsinnstag" als Ergebnis ausschreibt, dass 

der Parameter mit einem ungültigen Wochentag ausgeführt wird.

Beispiel: Die Funktion wird mit dem Wochentag "Spaßtag" ausgeführt -> Das Ergebnis ist "Unsinnstag".

## In der Ausführung
// TODO: Funktion schreiben

// Ausführung
nextDay("Montag"); // In der Konsole erscheint "Dienstag"

nextDay("Dienstag"); // In der Konsole erscheint "Mittwoch"

nexDay("Mittwoch"); In der Konsole erscheint "Donnerstag"

..und so weiter..

nextDay("blabla"); // In der Konsole erscheint "Unsinnstag"
