const createElevation = (elevation: number) => `
  0 1px ${elevation / 2}px rgba(0,0,0,0.2)
`;

export const BORDER_RADIUS = {
  small: 2,
  base: 4,
  large: 12,
  xLarge: 24
} as const;

export const ELEVATION = {
  el0: 'none',
  el1: createElevation(1),
  el2: createElevation(2),
  el3: createElevation(3),
  el4: createElevation(4),
  el5: createElevation(5)
} as const;

export const FONT_FAMILY_SERIF = `"Public Sans", "Helvetica Neue", "Open Sans", Arial, Verdana, sans-serif`;
export const FONT_FAMILY_MONO = `"Roboto Mono", "Courier New", monospace`;

export const FONT_SIZE = {
  body: 14,
  caption: .6,
  heading: 3.25,
  sectionTitle: 2.5,
  subheading: 1.7,
  link: 1.5,
  tertiary: 1.25,
  title: 3,
  quaternary: .75,
}

export const FONT_WEIGHT = {
  light: 100,
  regular: 300,
  medium: 500,
  bold: 700
} as const;

export const ICON_SIZE = {
  small: 16,
  base: 24,
  navMenu: 48,
  large: 64
} as const;

export const ZINDEX = {
  min: -999,
  base: 1,
  low: 10,
  medium: 20,
  high: 30,
  spinner: 50,
  navigation: 100,
  max: 999
} as const;