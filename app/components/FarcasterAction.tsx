'use client';

import { useState } from 'react';
import { Share2, Heart, MessageCircle, Repeat2 } from 'lucide-react';

interface FarcasterActionProps {
  variant?: 'primary' | 'secondary';
  actionType?: 'share' | 'like' | 'comment' | 'recast';
  onAction?: (type: string) => void;
  disabled?: boolean;
}

export function FarcasterAction({ 
  variant = 'primary', 
  actionType = 'share',
  onAction,
  disabled = false
}: FarcasterActionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [actionCount, setActionCount] = useState(0);

  const getIcon = () => {
    switch (actionType) {
      case 'like':
        return <Heart className="w-4 h-4" />;
      case 'comment':
        return <MessageCircle className="w-4 h-4" />;
      case 'recast':
        return <Repeat2 className="w-4 h-4" />;
      default:
        return <Share2 className="w-4 h-4" />;
    }
  };

  const getLabel = () => {
    switch (actionType) {
      case 'like':
        return 'Like';
      case 'comment':
        return 'Comment';
      case 'recast':
        return 'Recast';
      default:
        return 'Share';
    }
  };

  const handleAction = async () => {
    if (disabled || isLoading) return;
    
    setIsLoading(true);
    
    // Simulate action
    setTimeout(() => {
      setActionCount(prev => prev + 1);
      setIsLoading(false);
      onAction?.(actionType);
    }, 500);
  };

  const buttonClasses = variant === 'primary' 
    ? 'btn-primary' 
    : 'btn-secondary';

  return (
    <button
      onClick={handleAction}
      disabled={disabled || isLoading}
      className={`${buttonClasses} flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {getIcon()}
      <span>{getLabel()}</span>
      {actionCount > 0 && (
        <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-xs">
          {actionCount}
        </span>
      )}
    </button>
  );
}
