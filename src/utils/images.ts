// Do not import this file to client components. It will not work

import sharp from "sharp";

export async function fetchImageAsBuffer(url: string): Promise<Buffer> {
  const response = await fetch(url, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export async function generateBlurUrl(url: string): Promise<string> {
  const response = await fetchImageAsBuffer(url)

  const obj = sharp(response)

  const { width, height } = await obj.metadata()
  const actualWidth = width ?? 0
  const actualHeight = height ?? 0

  const buff = await obj.resize(
    16,
    Math.floor(actualHeight * (16 / actualWidth))
  ).toBuffer()


  return buff.toString('base64')
}
