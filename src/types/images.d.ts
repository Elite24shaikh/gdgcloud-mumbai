// Extend module declarations so TypeScript recognises uppercase image extensions
declare module '*.JPG' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}

declare module '*.JPEG' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}

declare module '*.PNG' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}

declare module '*.WEBP' {
  import { StaticImageData } from 'next/image';
  const src: StaticImageData;
  export default src;
}
