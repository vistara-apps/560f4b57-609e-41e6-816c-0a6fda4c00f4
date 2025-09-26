'use client';

import { AppShell } from '../components/AppShell';
import { InsightCard } from '../components/InsightCard';
import { AgentChat } from '../components/AgentChat';
import { useTheme } from '../components/ThemeProvider';
import { Palette, Eye, Smartphone } from 'lucide-react';

export default function ThemePreviewPage() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'default', name: 'Default (Warm Social)', description: 'Dark teal with coral accents' },
    { id: 'celo', name: 'Celo', description: 'Black with yellow accents' },
    { id: 'solana', name: 'Solana', description: 'Dark purple with magenta accents' },
    { id: 'base', name: 'Base', description: 'Dark blue with Base blue accents' },
    { id: 'coinbase', name: 'Coinbase', description: 'Dark navy with Coinbase blue accents' },
  ];

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border">
            <Palette className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted">Theme Preview</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gradient">
            CivicBot AI Themes
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Experience CivicBot AI in different visual themes. Each theme is optimized for different blockchain ecosystems.
          </p>
        </div>

        {/* Current Theme Info */}
        <div className="glass-card p-6 text-center">
          <h2 className="text-xl font-semibold text-fg mb-2">
            Current Theme: {themes.find(t => t.id === theme)?.name}
          </h2>
          <p className="text-muted">
            {themes.find(t => t.id === theme)?.description}
          </p>
        </div>

        {/* Theme Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((themeOption) => (
            <button
              key={themeOption.id}
              onClick={() => setTheme(themeOption.id as any)}
              className={`glass-card p-6 text-left hover:bg-opacity-15 transition-all duration-200 ${
                theme === themeOption.id ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-4 h-4 rounded-full ${
                  themeOption.id === 'default' ? 'bg-gradient-to-r from-teal-500 to-coral-500' :
                  themeOption.id === 'celo' ? 'bg-yellow-400' :
                  themeOption.id === 'solana' ? 'bg-purple-500' :
                  themeOption.id === 'base' ? 'bg-blue-500' :
                  'bg-blue-600'
                }`} />
                <h3 className="font-semibold text-fg">{themeOption.name}</h3>
              </div>
              <p className="text-sm text-muted">{themeOption.description}</p>
              {theme === themeOption.id && (
                <div className="mt-3 text-xs text-primary font-medium">
                  ✓ Currently Active
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Preview Components */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-fg text-center">Component Preview</h2>
          
          {/* Metrics Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InsightCard
              title="Active Users"
              value="2,847"
              change={12}
              variant="positive"
              icon={<Eye className="w-5 h-5" />}
              description="Theme preview metrics"
            />
            <InsightCard
              title="Theme Rating"
              value="4.8/5"
              change={5}
              variant="positive"
              icon={<Palette className="w-5 h-5" />}
              description="User satisfaction"
            />
            <InsightCard
              title="Mobile Ready"
              value="100%"
              variant="positive"
              icon={<Smartphone className="w-5 h-5" />}
              description="Responsive design"
            />
          </div>

          {/* Chat Preview */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-fg mb-4 text-center">Chat Interface Preview</h3>
            <AgentChat variant="compact" />
          </div>

          {/* Color Palette */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Color Palette</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-12 bg-bg rounded border border-border"></div>
                <p className="text-sm text-muted">Background</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-surface rounded border border-border"></div>
                <p className="text-sm text-muted">Surface</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-primary rounded"></div>
                <p className="text-sm text-muted">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-12 bg-accent rounded"></div>
                <p className="text-sm text-muted">Accent</p>
              </div>
            </div>
          </div>

          {/* Typography Preview */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-fg mb-4">Typography</h3>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-fg">Heading 1</h1>
              <h2 className="text-2xl font-semibold text-fg">Heading 2</h2>
              <h3 className="text-xl font-medium text-fg">Heading 3</h3>
              <p className="text-base text-fg">Body text with normal weight and good readability.</p>
              <p className="text-sm text-muted">Muted text for secondary information.</p>
            </div>
          </div>
        </div>

        {/* Theme Switching Instructions */}
        <div className="glass-card p-6 text-center">
          <h3 className="text-lg font-semibold text-fg mb-2">How to Switch Themes</h3>
          <p className="text-muted mb-4">
            You can change themes using the dropdown in the header or by adding a theme parameter to the URL.
          </p>
          <div className="text-sm text-muted space-y-1">
            <p>URL Examples:</p>
            <code className="bg-surface px-2 py-1 rounded">?theme=celo</code>
            <code className="bg-surface px-2 py-1 rounded ml-2">?theme=solana</code>
            <code className="bg-surface px-2 py-1 rounded ml-2">?theme=base</code>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
