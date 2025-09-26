// App Configuration
export const APP_CONFIG = {
  name: 'CivicBot AI',
  tagline: 'Your AI-powered partner for transparent and efficient public services',
  version: '1.0.0',
  supportEmail: 'support@civicbot.ai',
  maxQueryLength: 500,
  maxDailyQueries: 50,
  defaultTheme: 'default' as const,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  chat: '/api/chat',
  sentiment: '/api/sentiment',
  predictions: '/api/predictions',
  feedback: '/api/feedback',
  analytics: '/api/analytics',
} as const;

// Pricing Tiers
export const PRICING_TIERS = {
  free: {
    name: 'Free',
    price: 0,
    queriesPerDay: 10,
    analyticsAccess: false,
    features: ['Basic AI responses', 'Limited queries', 'Community support'],
  },
  basic: {
    name: 'Basic',
    price: 0.50,
    queriesPerDay: 50,
    analyticsAccess: true,
    features: ['Advanced AI responses', 'Sentiment analysis', 'Email support'],
  },
  premium: {
    name: 'Premium',
    price: 2.00,
    queriesPerDay: 200,
    analyticsAccess: true,
    features: ['All features', 'Priority support', 'Custom integrations'],
  },
} as const;

// Service Categories
export const SERVICE_CATEGORIES = [
  'Transportation',
  'Utilities',
  'Permits & Licenses',
  'Public Safety',
  'Parks & Recreation',
  'Health Services',
  'Education',
  'Housing',
  'Waste Management',
  'City Planning',
] as const;

// Sentiment Thresholds
export const SENTIMENT_THRESHOLDS = {
  veryPositive: 0.6,
  positive: 0.2,
  neutral: 0.1,
  negative: -0.2,
  veryNegative: -0.6,
} as const;

// Chart Colors
export const CHART_COLORS = {
  primary: '#14b8a6',
  accent: '#ff6b6b',
  positive: '#10b981',
  negative: '#ef4444',
  neutral: '#6b7280',
  background: '#0f4c4c',
  surface: 'rgba(255, 255, 255, 0.05)',
} as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 200,
  slow: 300,
  verySlow: 500,
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  networkError: 'Network error. Please check your connection and try again.',
  serverError: 'Server error. Please try again later.',
  validationError: 'Please check your input and try again.',
  authError: 'Authentication required. Please sign in.',
  rateLimitError: 'Too many requests. Please wait before trying again.',
  genericError: 'Something went wrong. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  querySubmitted: 'Your query has been submitted successfully.',
  feedbackSaved: 'Thank you for your feedback!',
  settingsUpdated: 'Settings updated successfully.',
  accountCreated: 'Account created successfully.',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  theme: 'civicbot-theme',
  userPreferences: 'civicbot-preferences',
  queryHistory: 'civicbot-query-history',
  authToken: 'civicbot-auth-token',
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  enableSentimentAnalysis: true,
  enablePredictions: true,
  enableFarcasterIntegration: true,
  enableMicroTransactions: true,
  enableThemeSelector: true,
} as const;

// Mock Data
export const MOCK_SERVICES = [
  { id: 'transport', name: 'Public Transportation', satisfaction: 0.78 },
  { id: 'waste', name: 'Waste Management', satisfaction: 0.85 },
  { id: 'parks', name: 'Parks & Recreation', satisfaction: 0.92 },
  { id: 'permits', name: 'Building Permits', satisfaction: 0.65 },
  { id: 'utilities', name: 'Utilities', satisfaction: 0.73 },
] as const;

export const MOCK_FEEDBACK_SOURCES = [
  'Farcaster',
  'Twitter',
  'City Website',
  'Mobile App',
  'Phone Calls',
  'In-Person',
] as const;
