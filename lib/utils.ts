import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Sentiment Analysis Utilities
export function analyzeSentiment(text: string): number {
  // Simple sentiment analysis - in production, use a proper NLP service
  const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love', 'like', 'happy', 'satisfied'];
  const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'hate', 'dislike', 'angry', 'frustrated', 'disappointed', 'poor'];
  
  const words = text.toLowerCase().split(/\s+/);
  let score = 0;
  
  words.forEach(word => {
    if (positiveWords.includes(word)) score += 1;
    if (negativeWords.includes(word)) score -= 1;
  });
  
  // Normalize to -1 to 1 range
  return Math.max(-1, Math.min(1, score / words.length * 10));
}

export function getSentimentLabel(score: number): 'positive' | 'negative' | 'neutral' {
  if (score > 0.1) return 'positive';
  if (score < -0.1) return 'negative';
  return 'neutral';
}

export function getSentimentEmoji(score: number): string {
  if (score > 0.3) return '😊';
  if (score > 0.1) return '🙂';
  if (score < -0.3) return '😟';
  if (score < -0.1) return '😐';
  return '😐';
}

// Date Utilities
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  return `${Math.floor(diffInSeconds / 86400)}d ago`;
}

// Number Utilities
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function formatPercentage(num: number): string {
  return `${(num * 100).toFixed(1)}%`;
}

// Validation Utilities
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidWalletAddress(address: string): boolean {
  // Basic Ethereum address validation
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// Local Storage Utilities
export function getStorageItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setStorageItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

// API Utilities
export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout = 10000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Mock Data Generators
export function generateMockQueries(count: number) {
  const sampleQuestions = [
    'How do I apply for a business permit?',
    'What are the parking regulations downtown?',
    'When is the next city council meeting?',
    'How do I report a pothole?',
    'What services are available for seniors?',
    'How do I register to vote?',
    'What are the library hours?',
    'How do I pay my water bill online?',
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    queryId: `query-${i}`,
    userId: `user-${Math.floor(Math.random() * 100)}`,
    timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
    question: sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)],
    aiResponse: 'I can help you with that. Let me provide you with the relevant information...',
    sentimentScore: Math.random() * 2 - 1,
    resolved: Math.random() > 0.3,
  }));
}

export function generateMockPredictions() {
  const services = ['Public Transport', 'Waste Management', 'Parks & Recreation', 'Building Permits'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return days.map((day, index) => ({
    label: day,
    value: Math.floor(Math.random() * 100) + 20,
    predicted: index >= 5, // Last 2 days are predictions
  }));
}
