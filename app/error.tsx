'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('CivicBot AI Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8 text-red-400" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-fg">Something went wrong!</h1>
          <p className="text-muted">
            CivicBot AI encountered an unexpected error. Don't worry, our team has been notified.
          </p>
        </div>

        {/* Error details for development */}
        {process.env.NODE_ENV === 'development' && (
          <div className="glass-card p-4 text-left">
            <h3 className="font-semibold text-fg mb-2">Error Details:</h3>
            <p className="text-sm text-red-400 font-mono break-all">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-xs text-muted mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="btn-primary flex items-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          
          <a
            href="/"
            className="btn-secondary flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </a>
        </div>

        <div className="text-xs text-muted">
          <p>If this problem persists, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
}
