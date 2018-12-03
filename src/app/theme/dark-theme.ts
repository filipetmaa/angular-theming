import { Theme } from './symbols';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--primary': '63, 81, 181',
    '--primary-light': '117, 125, 232',
    '--primary-dark': '0, 41, 132',
    '--primary-variant': '0, 41, 132',
    '--on-primary': '255, 255, 255',
    '--secondary': '244, 67, 54',
    '--secondary-light': '255, 121, 97',
    '--secondary-dark': '186, 0, 13',
    '--secondary-variant': '186, 0, 13',
    '--on-secondary': '255, 255, 255',
    '--background': '33, 33, 33',
    '--on-background': '250, 250, 250',
    '--surface': '55, 55, 55',
    '--on-surface': '250, 250, 250',
    '--error': '231, 78, 60',
    '--on-error': '255, 255, 255'
  }
};
