import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";

const src = path.join(process.cwd(), "public", "favicon-source.png");
const icoSizes = [16, 32, 48];
const CANVAS_SIZE = 512; // high-res working canvas for the circle composite
const LOGO_SCALE = 0.82; // logo fills ~82% of the circle diameter

function buildIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + dirEntrySize * count;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  const imageBuffers = [];

  for (const { size, buffer } of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0);
    entry.writeUInt8(size >= 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    imageBuffers.push(buffer);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageBuffers]);
}

async function buildCircleComposite() {
  const circleSvg = Buffer.from(
    `<svg width="${CANVAS_SIZE}" height="${CANVAS_SIZE}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${CANVAS_SIZE / 2}" cy="${CANVAS_SIZE / 2}" r="${CANVAS_SIZE / 2}" fill="#FFFFFF"/>
    </svg>`
  );

  const logoSize = Math.round(CANVAS_SIZE * LOGO_SCALE);
  const logoBuffer = await sharp(src)
    .resize(logoSize, logoSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const offset = Math.round((CANVAS_SIZE - logoSize) / 2);

  return sharp(circleSvg)
    .composite([{ input: logoBuffer, left: offset, top: offset }])
    .png()
    .toBuffer();
}

const composite = await buildCircleComposite();

const pngBuffers = await Promise.all(
  icoSizes.map(async (size) => ({
    size,
    buffer: await sharp(composite)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer(),
  }))
);

const ico = buildIco(pngBuffers);
await writeFile(path.join(process.cwd(), "src", "app", "favicon.ico"), ico);
console.log("Wrote src/app/favicon.ico with sizes", icoSizes.join(", "));

const appleTouch = await sharp(composite)
  .resize(180, 180, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .flatten({ background: { r: 255, g: 255, b: 255 } })
  .png()
  .toBuffer();
await writeFile(path.join(process.cwd(), "src", "app", "apple-icon.png"), appleTouch);
console.log("Wrote src/app/apple-icon.png (180x180)");
