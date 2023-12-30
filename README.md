# Quartett-Kartenspiel

## Beschreibung

Dieses Projekt ist eine interaktive Umsetzung des klassischen Quartett-Kartenspiels, programmiert mit React und Redux. Es ermöglicht Spielern, gegen einen computergesteuerten Gegner anzutreten. Das Spiel verwendet eine Sammlung von Karten, jede mit unterschiedlichen Eigenschaften, und basiert auf dem Vergleich dieser Eigenschaften, um einen Gewinner für jede Runde zu bestimmen.

## Hauptmerkmale

- **Start des Spiels:** Benutzer können das Spiel starten, woraufhin die Karten gemischt und zwischen dem Spieler und dem Computer aufgeteilt werden.
- **Spielerinteraktion:** Spieler wählen eine Eigenschaft aus der aktuellen Karte aus, um sie mit der entsprechenden Eigenschaft der Computerkarte zu vergleichen.
- **Vergleichslogik:** Die ausgewählten Eigenschaften werden verglichen, um zu bestimmen, ob der Spieler gewinnt, verliert oder ob es ein Unentschieden gibt.
- **Aktualisierung des Kartenstapels:** Basierend auf dem Ergebnis des Vergleichs werden die Karten zwischen dem Spieler und dem Computer verschoben. Bei einem Unentschieden werden die Karten in einen separaten Stapel gelegt.
- **Spielende:** Das Spiel endet, wenn einer der Spieler keine Karten mehr hat. Eine entsprechende Nachricht wird angezeigt, um den Ausgang des Spiels zu verkünden.
- **Computerzug:** Wenn der Spieler verliert, ist der Computer an der Reihe. Der Computer wählt automatisch die stärkste verfügbare Eigenschaft für den Vergleich aus.
- **Ergebnisanzeige:** Nach jedem Zug wird das Ergebnis (Gewinn, Verlust oder Unentschieden) zusammen mit der verglichenen Eigenschaft und den Werten von Spieler und Computer angezeigt.

## Technologie-Stack

- **React:** Für die Benutzeroberfläche und Interaktionen.
- **Redux:** Zur Verwaltung des Zustands der Anwendung.
- **JavaScript/ES6+:** Für die Spiellogik und Interaktionen.
- **CSS:** Für das Styling der Komponenten.

## Installation und Ausführung

1. Klonen Sie das Repository.
2. Führen Sie `npm install` aus, um die benötigten Pakete zu installieren.
3. Verwenden Sie `npm start`, um das Spiel in Ihrem lokalen Browser zu starten.
