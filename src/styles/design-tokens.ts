export const DESIGN_TOKENS = {
  colors: {
    bgPrimary: '#050508',
    bgSurface: '#0a0a0f',
    bgElevated: '#111118',
    bgGlass: 'rgba(255, 255, 255, 0.03)',
    border: '#1a1a2e',
    borderGlow: 'rgba(59, 130, 246, 0.3)',
    textPrimary: '#f0f0f5',
    textSecondary: '#8888a0',
    textMuted: '#555570',
    accentBlue: '#3b82f6',
    accentCyan: '#06b6d4',
    accentViolet: '#8b5cf6',
    accentGlow: 'rgba(59, 130, 246, 0.15)',
    statusAvailable: '#10b981',
  },
  fonts: {
    display: 'var(--font-sans)',
    mono: 'var(--font-mono)',
  },
  animations: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '600ms cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '500ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
} as const;
