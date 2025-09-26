'use client';

import { ReactNode } from 'react';
import { Bot, BarChart3, TrendingUp, Settings2 } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'glass';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const { theme, setTheme } = useTheme();

  const shellClasses = variant === 'glass' 
    ? 'glass-card min-h-screen' 
    : 'min-h-screen bg-bg';

  return (
    <div className={shellClasses}>
      {/* Header */}
      <header className="glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">CivicBot AI</h1>
                <p className="text-sm text-muted">Your AI-powered civic partner</p>
              </div>
            </div>
            
            {/* Theme Selector */}
            <div className="flex items-center space-x-2">
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as any)}
                className="input-field text-sm"
              >
                <option value="default">Default</option>
                <option value="celo">Celo</option>
                <option value="solana">Solana</option>
                <option value="base">Base</option>
                <option value="coinbase">Coinbase</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="glass-card border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            <a href="#chat" className="nav-link active flex items-center space-x-2">
              <Bot className="w-4 h-4" />
              <span>AI Assistant</span>
            </a>
            <a href="#sentiment" className="nav-link flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Sentiment Analysis</span>
            </a>
            <a href="#predictions" className="nav-link flex items-center space-x-2">
              <TrendingUp className="w-4 h-4" />
              <span>Resource Predictions</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-muted">
            <p>&copy; 2024 CivicBot AI. Empowering transparent public services.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
