/**
 * Eatsmart Design Tokens
 * Source of truth for Web (Next.js) & Mobile (Expo/React Native).
 * Derived from Design-08 "Soft Kitchen" design language.
 */

export const colors = {
  // Base Kitchen Palette
  cream: '#FBF9F5',
  linen: '#F8F5EF',
  linenDeep: '#EEE9DF',
  surface: '#FFFFFF',
  
  // Ink & Typography
  ink: '#3D3A34',
  inkDark: '#1F221B',
  inkSoft: '#6E675C',
  inkFaint: '#A29A8B',
  borderSoft: 'rgba(55, 64, 54, 0.12)',
  line: 'rgba(61, 58, 52, 0.12)',

  // Sage (Primary Brand Color)
  sage: '#7C9885',
  sageDeep: '#2D5A27',
  sageDark: '#2A4C35',
  sageMist: '#E7EFE7',

  // Accent Tones
  blush: '#E4A898',
  blushMist: '#F9EDE7',
  butter: '#F2D18B',
  butterMist: '#FBF3DD',

  // Health & Evaluation Scores (Tunisian Food Evaluation)
  scoreGreat: '#2D5A27', // Excellent / Bon choix (80-100)
  scoreGood: '#6C9873',  // Bon (60-79)
  scoreMid: '#DFAE5C',   // Médiocre / Choix mitigé (40-59)
  scoreBad: '#D07B62',   // Mauvais / À limiter (0-39)

  // Status Colors
  success: '#2D5A27',
  warning: '#DFAE5C',
  error: '#D07B62',
  info: '#4B7B94',
} as const;

export const spacing = {
  s1: 4,
  s2: 8,
  s3: 12,
  s4: 16,
  s5: 24,
  s6: 32,
  s7: 48,
  s8: 64,
  s9: 96,
} as const;

export const radii = {
  xs: 6,
  sm: 14,
  md: 20,
  lg: 28,
  xl: 32,
  pill: 9999,
} as const;

export const shadows = {
  subtle: {
    shadowColor: '#3D3A34',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  card: {
    shadowColor: '#3D3A34',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  lifted: {
    shadowColor: '#3D3A34',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 28,
    elevation: 8,
  },
} as const;

export const typography = {
  fonts: {
    display: 'Plus Jakarta Sans',
    body: 'DM Sans',
    system: 'System',
  },
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 30,
    hero: 38,
  },
  weights: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
} as const;

export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Radii = typeof radii;
export type Typography = typeof typography;
