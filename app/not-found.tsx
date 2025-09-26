import { Search, Home, Bot } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
          <Search className="w-8 h-8 text-white" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-fg">Page Not Found</h1>
          <p className="text-muted">
            The page you're looking for doesn't exist. Let CivicBot AI help you find what you need.
          </p>
        </div>

        <div className="glass-card p-4">
          <h3 className="font-semibold text-fg mb-2">Popular Destinations:</h3>
          <ul className="text-sm text-muted space-y-1 text-left">
            <li>• AI Assistant Chat</li>
            <li>• Sentiment Analysis Dashboard</li>
            <li>• Resource Predictions</li>
            <li>• Theme Preview</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="btn-primary flex items-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </a>
          
          <a
            href="/#chat"
            className="btn-secondary flex items-center space-x-2"
          >
            <Bot className="w-4 h-4" />
            <span>Ask CivicBot</span>
          </a>
        </div>

        <div className="text-xs text-muted">
          <p>Error 404 - Page not found</p>
        </div>
      </div>
    </div>
  );
}
