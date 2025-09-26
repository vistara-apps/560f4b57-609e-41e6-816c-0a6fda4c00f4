'use client';

import { TrendingUp, TrendingDown, Minus, AlertCircle } from 'lucide-react';

interface InsightCardProps {
  title: string;
  value: string | number;
  change?: number;
  variant?: 'positive' | 'neutral' | 'negative';
  description?: string;
  icon?: React.ReactNode;
}

export function InsightCard({ 
  title, 
  value, 
  change, 
  variant = 'neutral', 
  description,
  icon 
}: InsightCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'positive':
        return 'border-green-500/20 bg-green-500/5';
      case 'negative':
        return 'border-red-500/20 bg-red-500/5';
      default:
        return 'border-border bg-surface';
    }
  };

  const getChangeIcon = () => {
    if (change === undefined) return null;
    
    if (change > 0) {
      return <TrendingUp className="w-4 h-4 text-green-400" />;
    } else if (change < 0) {
      return <TrendingDown className="w-4 h-4 text-red-400" />;
    } else {
      return <Minus className="w-4 h-4 text-muted" />;
    }
  };

  const getChangeColor = () => {
    if (change === undefined) return '';
    return change > 0 ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-muted';
  };

  return (
    <div className={`metric-card border ${getVariantStyles()}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            {icon && <div className="text-muted">{icon}</div>}
            <h3 className="text-sm font-medium text-muted">{title}</h3>
          </div>
          
          <div className="flex items-baseline space-x-2">
            <p className="text-2xl font-bold text-fg">{value}</p>
            {change !== undefined && (
              <div className={`flex items-center space-x-1 ${getChangeColor()}`}>
                {getChangeIcon()}
                <span className="text-sm font-medium">
                  {Math.abs(change)}%
                </span>
              </div>
            )}
          </div>
          
          {description && (
            <p className="text-sm text-muted mt-2">{description}</p>
          )}
        </div>
        
        {variant === 'negative' && (
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
        )}
      </div>
    </div>
  );
}
