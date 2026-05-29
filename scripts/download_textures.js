const https = require('https');
const fs = require('fs');
const path = require('path');

const textures = {
  sun: 'https://www.solarsystemscope.com/textures/download/2k_sun.jpg',
  mercury: 'https://www.solarsystemscope.com/textures/download/2k_mercury.jpg',
  venus: 'https://www.solarsystemscope.com/textures/download/2k_venus_surface.jpg',
  venusAtmosphere: 'https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg',
  earth: 'https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg',
  earthClouds: 'https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg',
  mars: 'https://www.solarsystemscope.com/textures/download/2k_mars.jpg',
  jupiter: 'https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg',
  saturn: 'https://www.solarsystemscope.com/textures/download/2k_saturn.jpg',
  saturnRing: 'https://www.solarsystemscope.com/textures/download/2k_saturn_ring_alpha.png',
  uranus: 'https://www.solarsystemscope.com/textures/download/2k_uranus.jpg',
  neptune: 'https://www.solarsystemscope.com/textures/download/2k_neptune.jpg',
};

const outputDir = path.join(__dirname, '../public/textures/planets');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${path.basename(dest)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

async function main() {
  const promises = [];
  for (const [key, url] of Object.entries(textures)) {
    const ext = url.split('.').pop();
    const dest = path.join(outputDir, `${key}.${ext}`);
    if (!fs.existsSync(dest)) {
      promises.push(download(url, dest));
    } else {
      console.log(`Skipped ${key}.${ext} (already exists)`);
    }
  }
  await Promise.all(promises);
  console.log('All downloads completed!');
}

main();
