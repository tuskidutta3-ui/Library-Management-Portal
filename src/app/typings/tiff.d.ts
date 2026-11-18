declare module 'tiff.js' {
  export default class Tiff {
    constructor(options: { buffer: Uint8Array });
    countDirectories?: () => number;
    setDirectory?: (index: number) => void;
    width?: () => number;
    height?: () => number;
    readRGBAImage?: (
      buffer: Uint8ClampedArray, 
      width: number, 
      height: number
    ) => void;
  }
}
