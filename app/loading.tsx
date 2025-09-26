import { Loader2, Bot } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto animate-pulse">
          <Bot className="w-8 h-8 text-white" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
            <p className="text-lg font-medium text-fg">Loading CivicBot AI</p>
          </div>
          <p className="text-sm text-muted">Initializing your civic assistant...</p>
        </div>
        
        {/* Loading skeleton */}
        <div className="mt-8 space-y-3 max-w-md mx-auto">
          <div className="h-4 bg-surface rounded animate-pulse"></div>
          <div className="h-4 bg-surface rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-surface rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
