# CivicBot AI - Base Mini App

Your AI-powered partner for transparent and efficient public services.

## Overview

CivicBot AI is a comprehensive Base Mini App that provides AI-powered civic assistance through three core features:

1. **Automated Citizen Query Response** - AI chatbot for instant answers to public service questions
2. **Public Feedback Sentiment Analysis** - Real-time analysis of citizen sentiment across social platforms
3. **Predictive Resource Allocation Insights** - AI-powered forecasting for optimal resource deployment

## Features

### 🤖 AI Assistant
- Real-time conversational AI for citizen queries
- Sentiment analysis of conversations
- Integration with Base Minikit Chat Agent API
- Support for follow-up questions and context

### 📊 Sentiment Analysis
- Public feedback analysis from Farcaster and other social platforms
- Real-time sentiment scoring and categorization
- Service-specific sentiment tracking
- Trending issue identification

### 📈 Resource Predictions
- AI-powered demand forecasting
- Historical data analysis with external factors
- Interactive charts and visualizations
- Confidence scoring and accuracy metrics

### 🎨 Multi-Theme Support
- **Default Theme**: Warm social theme with dark teal and coral accents
- **Celo Theme**: Black background with yellow accents
- **Solana Theme**: Dark purple with magenta accents
- **Base Theme**: Dark blue with Base blue accents
- **Coinbase Theme**: Dark navy with Coinbase blue accents

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **React**: React 19 (required for OnchainKit compatibility)
- **Blockchain**: Base network integration via OnchainKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout
- **Icons**: Lucide React
- **State Management**: React hooks and context

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Base network access

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd civicbot-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
civicbot-ai/
├── app/                          # Next.js App Router
│   ├── components/              # Reusable components
│   │   ├── AppShell.tsx        # Main app layout
│   │   ├── AgentChat.tsx       # AI chat interface
│   │   ├── InsightCard.tsx     # Metrics display
│   │   ├── PredictionChart.tsx # Data visualization
│   │   ├── FarcasterAction.tsx # Social actions
│   │   └── ThemeProvider.tsx   # Theme management
│   ├── theme-preview/          # Theme showcase page
│   ├── globals.css             # Global styles & themes
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── providers.tsx           # OnchainKit provider
│   ├── loading.tsx             # Loading UI
│   ├── error.tsx               # Error boundary
│   └── not-found.tsx           # 404 page
├── lib/                        # Utilities and types
│   ├── types.ts                # TypeScript definitions
│   ├── utils.ts                # Helper functions
│   └── constants.ts            # App constants
├── public/                     # Static assets
└── README.md                   # This file
```

## Key Components

### AppShell
Main application layout with navigation, theme selector, and responsive design.

### AgentChat
AI-powered chat interface with:
- Real-time messaging
- Sentiment analysis
- Loading states
- Message history

### InsightCard
Reusable metric display component with:
- Multiple variants (positive, negative, neutral)
- Change indicators
- Icon support
- Descriptions

### PredictionChart
Data visualization component featuring:
- Bar and line chart variants
- Historical vs predicted data
- Interactive time period selection
- Confidence indicators

### ThemeProvider
Theme management system supporting:
- URL parameter theme switching
- localStorage persistence
- CSS variable-based theming
- Real-time theme updates

## Business Model

CivicBot AI operates on a micro-transaction model:

- **Free Tier**: 10 queries/day, basic responses
- **Basic Tier**: $0.50 - 50 queries/day, sentiment analysis
- **Premium Tier**: $2.00 - 200 queries/day, full features

## API Integration

### Base Minikit Chat Agent API
- Real-time AI responses
- Context management
- Response formatting

### Farcaster API
- Social data fetching
- Public discourse analysis
- User activity tracking

### External Forecasting APIs
- Weather data integration
- Economic indicators
- Event-based predictions

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

Required environment variables:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: OnchainKit API key
- `NEXT_PUBLIC_BASE_RPC_URL`: Base network RPC URL (optional)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Email: support@civicbot.ai
- Documentation: [Base Mini Apps Docs](https://docs.base.org/base-app/)
- OnchainKit: [OnchainKit Documentation](https://onchainkit.xyz/)

## Acknowledgments

- Built with [OnchainKit](https://onchainkit.xyz/) by Coinbase
- Powered by [Base](https://base.org/) blockchain
- Designed for [Farcaster](https://farcaster.xyz/) integration
- UI components inspired by modern civic tech design patterns

---

**CivicBot AI** - Empowering transparent and efficient public services through AI.
