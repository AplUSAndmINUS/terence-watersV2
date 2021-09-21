const createElevation = (elevation: number) => `
  0 1px ${elevation / 2}px rgba(0,0,0,0.2)
`;

export const BorderRadius = {
  small: 2,
  base: 4,
  large: 12,
  xLarge: 24
} as const;

export const Elevation = {
  el0: 'none',
  el1: createElevation(1),
  el2: createElevation(2),
  el3: createElevation(3),
  el4: createElevation(4),
  el5: createElevation(5)
} as const;

export const IconSize = {
  small: 16,
  base: 24,
  navMenu: 48,
  large: 64
} as const;

export const ZIndex = {
  min: -999,
  base: 1,
  low: 10,
  medium: 20,
  high: 30,
  spinner: 50,
  navigation: 100,
  max: 999
} as const;