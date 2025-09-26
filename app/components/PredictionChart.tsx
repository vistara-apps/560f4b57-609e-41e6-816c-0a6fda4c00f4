'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, Calendar, Users } from 'lucide-react';

interface DataPoint {
  label: string;
  value: number;
  predicted?: boolean;
}

interface PredictionChartProps {
  title: string;
  data: DataPoint[];
  variant?: 'line' | 'bar';
  timeframe?: string;
}

export function PredictionChart({ 
  title, 
  data, 
  variant = 'bar',
  timeframe = 'Next 7 days'
}: PredictionChartProps) {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const maxValue = Math.max(...data.map(d => d.value));
  
  const getBarHeight = (value: number) => {
    return (value / maxValue) * 100;
  };

  const getPredictionColor = (predicted?: boolean) => {
    return predicted ? 'bg-accent' : 'bg-primary';
  };

  return (
    <div className="glass-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            {variant === 'line' ? (
              <TrendingUp className="w-5 h-5 text-white" />
            ) : (
              <BarChart3 className="w-5 h-5 text-white" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-fg">{title}</h3>
            <p className="text-sm text-muted">{timeframe}</p>
          </div>
        </div>
        
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="input-field text-sm"
        >
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="quarter">This Quarter</option>
        </select>
      </div>

      {/* Chart */}
      <div className="space-y-4">
        {variant === 'bar' ? (
          <div className="flex items-end justify-between h-48 space-x-2">
            {data.map((point, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col justify-end h-40">
                  <div
                    className={`w-full rounded-t-md transition-all duration-500 ${getPredictionColor(point.predicted)}`}
                    style={{ height: `${getBarHeight(point.value)}%` }}
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-medium text-fg">{point.value}</p>
                  <p className="text-xs text-muted">{point.label}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-48 flex items-center justify-center text-muted">
            <p>Line chart visualization coming soon</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-6 pt-4 border-t border-border">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary rounded"></div>
          <span className="text-sm text-muted">Historical Data</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-accent rounded"></div>
          <span className="text-sm text-muted">Predictions</span>
        </div>
      </div>

      {/* Key Insights */}
      <div className="mt-6 p-4 bg-surface rounded-lg">
        <h4 className="text-sm font-medium text-fg mb-2">Key Insights</h4>
        <ul className="space-y-1 text-sm text-muted">
          <li>• Peak demand expected on {data.find(d => d.predicted)?.label || 'weekends'}</li>
          <li>• 15% increase predicted compared to last period</li>
          <li>• Confidence score: 87%</li>
        </ul>
      </div>
    </div>
  );
}
