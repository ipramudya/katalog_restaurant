const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination =path.resolve(__dirname, 'dist/images');

const sharpingImages = () => {
  fs.readdirSync(target)
      .forEach((image) => {
        sharp(`${target}/${image}`)
            .resize(720)
            .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                .slice(0, -1)
                .join('.')}-small.jpg`));

        sharp(`${target}/${image}`)
            .resize(900)
            .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
                .slice(0, -1)
                .join('.')}-large.jpg`));
      });
};

if (!fs.existsSync(destination)) {
  fs.mkdir(destination, {recursive: true}, () => {
    console.log(`Creating new ${destination}`);
    sharpingImages();
  });
} else {
  sharpingImages();
}


