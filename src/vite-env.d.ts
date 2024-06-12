/// <reference types="vite/client" />
/// <reference types="vite-plugin-istanbul" />

interface ImportMetaEnv {
  readonly PUBLIC_ENV__APP_ENV: string;
  readonly PUBLIC_ENV__APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.svg' {
  import React = require('react');

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
