'use client';

import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { AgentChat } from './components/AgentChat';
import { InsightCard } from './components/InsightCard';
import { PredictionChart } from './components/PredictionChart';
import { FarcasterAction } from './components/FarcasterAction';
import { Bot, Users, TrendingUp, MessageSquare, BarChart3, Heart } from 'lucide-react';
import { generateMockPredictions } from '../lib/utils';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'chat' | 'sentiment' | 'predictions'>('chat');
  const [predictionData, setPredictionData] = useState(generateMockPredictions());

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setPredictionData(generateMockPredictions());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleFarcasterAction = (actionType: string) => {
    console.log(`Farcaster action: ${actionType}`);
    // In a real app, this would integrate with Farcaster APIs
  };

  return (
    <AppShell variant="glass">
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-surface px-4 py-2 rounded-full border border-border">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-muted">AI Assistant Online</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gradient">
            Welcome to CivicBot AI
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Your AI-powered partner for transparent and efficient public services. 
            Get instant answers, analyze public sentiment, and predict resource needs.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <InsightCard
            title="Active Users"
            value="2,847"
            change={12}
            variant="positive"
            icon={<Users className="w-5 h-5" />}
            description="Citizens using CivicBot this month"
          />
          <InsightCard
            title="Queries Resolved"
            value="15,234"
            change={8}
            variant="positive"
            icon={<MessageSquare className="w-5 h-5" />}
            description="AI-powered responses delivered"
          />
          <InsightCard
            title="Avg Satisfaction"
            value="4.7/5"
            change={5}
            variant="positive"
            icon={<Heart className="w-5 h-5" />}
            description="Citizen satisfaction rating"
          />
          <InsightCard
            title="Response Time"
            value="1.2s"
            change={-15}
            variant="positive"
            icon={<TrendingUp className="w-5 h-5" />}
            description="Average AI response time"
          />
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-surface rounded-lg p-1">
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'chat'
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted hover:text-fg hover:bg-surface'
            }`}
          >
            <Bot className="w-4 h-4 inline mr-2" />
            AI Assistant
          </button>
          <button
            onClick={() => setActiveTab('sentiment')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'sentiment'
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted hover:text-fg hover:bg-surface'
            }`}
          >
            <BarChart3 className="w-4 h-4 inline mr-2" />
            Sentiment Analysis
          </button>
          <button
            onClick={() => setActiveTab('predictions')}
            className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'predictions'
                ? 'bg-primary text-white shadow-sm'
                : 'text-muted hover:text-fg hover:bg-surface'
            }`}
          >
            <TrendingUp className="w-4 h-4 inline mr-2" />
            Predictions
          </button>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'chat' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-fg mb-2">AI-Powered Citizen Support</h2>
                <p className="text-muted">
                  Ask questions about public services, permits, regulations, and city information.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <AgentChat variant="withTools" />
              </div>

              {/* Farcaster Actions */}
              <div className="flex justify-center space-x-4">
                <FarcasterAction
                  variant="primary"
                  actionType="share"
                  onAction={handleFarcasterAction}
                />
                <FarcasterAction
                  variant="secondary"
                  actionType="like"
                  onAction={handleFarcasterAction}
                />
              </div>
            </div>
          )}

          {activeTab === 'sentiment' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-fg mb-2">Public Sentiment Analysis</h2>
                <p className="text-muted">
                  Real-time analysis of citizen feedback across social media and surveys.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InsightCard
                  title="Overall Sentiment"
                  value="78%"
                  variant="positive"
                  description="Positive sentiment across all services"
                />
                <InsightCard
                  title="Trending Issues"
                  value="3"
                  variant="neutral"
                  description="Issues requiring attention"
                />
                <InsightCard
                  title="Response Rate"
                  value="92%"
                  variant="positive"
                  description="Citizens receiving responses"
                />
              </div>

              {/* Sentiment by Service */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-fg mb-4">Sentiment by Service</h3>
                <div className="space-y-4">
                  {[
                    { service: 'Public Transportation', sentiment: 0.65, feedback: 234 },
                    { service: 'Waste Management', sentiment: 0.82, feedback: 189 },
                    { service: 'Parks & Recreation', sentiment: 0.91, feedback: 156 },
                    { service: 'Building Permits', sentiment: 0.45, feedback: 98 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                      <div>
                        <p className="font-medium text-fg">{item.service}</p>
                        <p className="text-sm text-muted">{item.feedback} feedback entries</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-semibold ${
                          item.sentiment > 0.7 ? 'text-green-400' :
                          item.sentiment > 0.5 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {(item.sentiment * 100).toFixed(0)}%
                        </p>
                        <p className="text-xs text-muted">
                          {item.sentiment > 0.7 ? 'Positive' :
                           item.sentiment > 0.5 ? 'Mixed' : 'Needs Attention'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'predictions' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-fg mb-2">Resource Demand Predictions</h2>
                <p className="text-muted">
                  AI-powered forecasting to optimize resource allocation and service delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PredictionChart
                  title="Public Transport Demand"
                  data={predictionData}
                  variant="bar"
                  timeframe="Next 7 days"
                />
                
                <div className="space-y-6">
                  <InsightCard
                    title="Peak Demand Day"
                    value="Friday"
                    variant="neutral"
                    description="Highest predicted usage"
                  />
                  <InsightCard
                    title="Capacity Utilization"
                    value="87%"
                    variant="positive"
                    description="Optimal resource usage"
                  />
                  <InsightCard
                    title="Cost Savings"
                    value="$12.4K"
                    variant="positive"
                    description="Monthly optimization savings"
                  />
                </div>
              </div>

              {/* Prediction Accuracy */}
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-fg mb-4">Prediction Accuracy</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">94%</p>
                    <p className="text-sm text-muted">Last Week</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">91%</p>
                    <p className="text-sm text-muted">Last Month</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">89%</p>
                    <p className="text-sm text-muted">Last Quarter</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="glass-card p-8 text-center">
          <h3 className="text-xl font-semibold text-fg mb-2">Ready to Transform Public Services?</h3>
          <p className="text-muted mb-6">
            Join thousands of citizens and public service providers using CivicBot AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Free Trial
            </button>
            <button className="btn-secondary">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
