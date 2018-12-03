import { Theme } from './symbols';

export const clientDarkTheme: Theme = {
  name: 'client-dark',
  properties: {
    '--primary': '250, 160, 0',
    '--primary-light': '255, 209, 72',
    '--primary-dark': '193, 113, 0',
    '--primary-variant': '242, 171, 21',
    '--on-primary': '255, 255, 255',
    '--secondary': '91, 173, 255',
    '--secondary-light': '148, 223, 255',
    '--secondary-dark': '0, 126, 203',
    '--secondary-variant': '0, 34, 72',
    '--on-secondary': '255, 255, 255',
    '--background': '33, 33, 33',
    '--on-background': '250, 250, 250',
    '--surface': '55, 55, 55',
    '--on-surface': '250, 250, 250',
    '--error': '176, 0, 32',
    '--on-error': '255, 255, 255'
  }
};
