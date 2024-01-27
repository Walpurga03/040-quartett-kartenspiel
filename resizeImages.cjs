const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = 'public/images/frontsite'; // Setzen Sie hier den Pfad zu Ihrem Verzeichnis
const outputDirectory = 'public/images/frontsite/formatiert'; // Pfad zum Ausgabeordner

const targetWidth = 480; // Die gewünschte Breite
const targetHeight = 400; // Die gewünschte Höhe

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Fehler beim Lesen des Verzeichnisses: ", err);
    return;
  }

  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.png') {
      sharp(`${directoryPath}/${file}`)
        .resize(targetWidth, targetHeight)
        .toFile(`${outputDirectory}/${file}`, err => {
          if (err) {
            console.error("Fehler beim Verarbeiten des Bildes: ", file, err);
          } else {
            console.log(`Bild erfolgreich verarbeitet: ${file}`);
          }
        });
    }
  });
});
