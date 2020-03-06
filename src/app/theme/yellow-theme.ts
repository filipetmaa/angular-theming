import { Theme } from './symbols';

export const yellowTheme: Theme = {
  name: 'yellow',
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
    '--background': '255, 255, 255',
    '--on-background': '0, 0, 0',
    '--surface': '255, 255, 255',
    '--on-surface': '0, 0, 0',
    '--error': '176, 0, 32',
    '--on-error': '255, 255, 255'
  }
};
