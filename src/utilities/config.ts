export enum ENVIRONMENT {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  STAGE = 'staging',
}

export const isDev = (): boolean => import.meta.env.DEV;

export const isProd = (): boolean => import.meta.env.PROD;

export const isAppStage = (): boolean => import.meta.env.PUBLIC_ENV__APP_ENV === ENVIRONMENT.STAGE;

export const isAppProd = (): boolean => import.meta.env.PUBLIC_ENV__APP_ENV === ENVIRONMENT.PRODUCTION;

export const getAppEnv = (): string => import.meta.env.PUBLIC_ENV__APP_ENV || ENVIRONMENT.DEVELOPMENT;

export const getAppVersion = (): string => import.meta.env.PUBLIC_ENV__APP_VERSION || 'N/A';

export const isServer = () => typeof document === 'undefined';

export const isClient = () => typeof document !== 'undefined';
