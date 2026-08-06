const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function run() {
  const rootDir = path.join(__dirname, '..');
  const publicDir = path.join(rootDir, 'public');
  const distDir = path.join(rootDir, 'dist');
  const assetsDir = path.join(rootDir, 'assets');

  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
  if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

  // Locate the uploaded logo file
  const uploadedLogoPath = path.join(rootDir, 'fabicon.png.png');
  const assetSourcePath = path.join(assetsDir, 'logo-source.png');

  let sourcePath = '';
  if (fs.existsSync(uploadedLogoPath)) {
    sourcePath = uploadedLogoPath;
    fs.copyFileSync(uploadedLogoPath, assetSourcePath);
  } else if (fs.existsSync(assetSourcePath)) {
    sourcePath = assetSourcePath;
  } else {
    throw new Error('Source logo file fabicon.png.png not found in workspace root or assets/');
  }

  console.log('Using uploaded logo source path:', sourcePath);

  // 1. Save High-DPI Retina logo.png (original transparent RGBA resolution 1538x566)
  const targetPublicLogo = path.join(publicDir, 'logo.png');
  const targetDistLogo = path.join(distDir, 'logo.png');
  fs.copyFileSync(sourcePath, targetPublicLogo);
  fs.copyFileSync(sourcePath, targetDistLogo);
  console.log('Saved High-DPI logo.png to public/ and dist/');

  // Remove old logo.svg if present
  const oldPublicSvg = path.join(publicDir, 'logo.svg');
  const oldDistSvg = path.join(distDir, 'logo.svg');
  if (fs.existsSync(oldPublicSvg)) fs.unlinkSync(oldPublicSvg);
  if (fs.existsSync(oldDistSvg)) fs.unlinkSync(oldDistSvg);

  // 2. Generate Favicons and Web App Manifest icons with transparent background centered
  const iconDefinitions = [
    { name: 'favicon.png', size: 192, inner: 176 },
    { name: 'apple-touch-icon.png', size: 180, inner: 164 },
    { name: 'icon-192.png', size: 192, inner: 176 },
    { name: 'icon-512.png', size: 512, inner: 468 }
  ];

  for (const icon of iconDefinitions) {
    const pubPath = path.join(publicDir, icon.name);
    const dstPath = path.join(distDir, icon.name);
    const cmd = `convert "${sourcePath}" -resize ${icon.inner}x${icon.inner} -background none -gravity center -extent ${icon.size}x${icon.size} "${pubPath}"`;
    execSync(cmd, { stdio: 'inherit' });
    fs.copyFileSync(pubPath, dstPath);
    console.log(`Saved ${icon.name} (${icon.size}x${icon.size})`);
  }

  // 3. Generate multi-resolution favicon.ico (64x64, 32x32, 16x16)
  const pubIco = path.join(publicDir, 'favicon.ico');
  const dstIco = path.join(distDir, 'favicon.ico');
  const icoCmd = `convert "${sourcePath}" -resize 60x60 -background none -gravity center -extent 64x64 -define icon:auto-resize=64,32,16 "${pubIco}"`;
  execSync(icoCmd, { stdio: 'inherit' });
  fs.copyFileSync(pubIco, dstIco);
  console.log('Saved multi-resolution favicon.ico');

  // 4. Generate Open Graph and Twitter Card image (og-image.png, 1200x630)
  // We composite the new logo centered on a refined dark slate branded card suitable for social previews
  const pubOg = path.join(publicDir, 'og-image.png');
  const dstOg = path.join(distDir, 'og-image.png');
  const ogCmd = `convert -size 1200x630 gradient:#0f172a-#020617 \\( "${sourcePath}" -resize 860x340 \\) -gravity center -composite "${pubOg}"`;
  execSync(ogCmd, { stdio: 'inherit' });
  fs.copyFileSync(pubOg, dstOg);
  console.log('Saved og-image.png (1200x630 social preview card)');

  // 5. Generate Web App Manifest site.webmanifest
  const manifestContent = {
    name: "Digital Grow Ltd (DGL IT)",
    short_name: "DGL IT",
    description: "ROI-Focused Digital Marketing & IT Solutions Agency Bangladesh",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#10b981",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable"
      }
    ]
  };

  const manifestStr = JSON.stringify(manifestContent, null, 2);
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), manifestStr, 'utf8');
  fs.writeFileSync(path.join(distDir, 'site.webmanifest'), manifestStr, 'utf8');
  console.log('Saved site.webmanifest');

  console.log('ALL LOGO ASSETS SUCCESSFULLY GENERATED FROM UPLOADED LOGO!');
}

run().catch(err => {
  console.error('Error generating logos from uploaded logo:', err);
  process.exit(1);
});
