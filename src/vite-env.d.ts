/// <reference types="vite/client" />
/// <reference types="vite-plugin-istanbul" />

import type { Scope } from 'effector';

declare global {
  interface Window {
    VIKE_EFX_SCOPE?: Scope;
  }
}

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
