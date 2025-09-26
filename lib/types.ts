// User Types
export interface User {
  userId: string;
  farcasterId?: string;
  walletAddress?: string;
  queryHistory: Query[];
  analyticsUsage: number;
  createdAt: Date;
  updatedAt: Date;
}

// Query Types
export interface Query {
  queryId: string;
  userId: string;
  timestamp: Date;
  question: string;
  aiResponse: string;
  sentimentScore: number;
  category?: string;
  resolved: boolean;
}

// Feedback Types
export interface FeedbackEntry {
  feedbackId: string;
  source: 'farcaster' | 'twitter' | 'survey' | 'direct';
  platform: string;
  content: string;
  timestamp: Date;
  sentimentLabel: 'positive' | 'negative' | 'neutral';
  sentimentScore: number;
  relatedService?: string;
  userId?: string;
}

// Resource Prediction Types
export interface ResourceDemandPrediction {
  predictionId: string;
  serviceType: string;
  predictedDemand: number;
  timestamp: Date;
  confidenceScore: number;
  factors: string[];
  timeframe: 'hourly' | 'daily' | 'weekly' | 'monthly';
}

// Analytics Types
export interface SentimentAnalytics {
  totalFeedback: number;
  positivePercentage: number;
  negativePercentage: number;
  neutralPercentage: number;
  trendingTopics: string[];
  averageSentiment: number;
  timeframe: string;
}

export interface ServiceMetrics {
  serviceId: string;
  serviceName: string;
  totalQueries: number;
  averageResponseTime: number;
  satisfactionScore: number;
  commonIssues: string[];
  resolutionRate: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
  timestamp: Date;
}

// Chat Types
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  sentimentScore?: number;
  category?: string;
  metadata?: Record<string, any>;
}

// Theme Types
export type Theme = 'default' | 'celo' | 'solana' | 'base' | 'coinbase';

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ActionButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}
