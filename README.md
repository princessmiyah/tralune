# Tralune

A calm, mobile-first life OS — recovery logging, finances, tasks, journal, fitness and vision in one place.

## Features

- **🔄 Recovery** - Track your daily recovery journey
- **💰 Finances** - Manage your money wisely
- **✓ Tasks** - Stay organized and productive
- **📝 Journal** - Reflect and write your thoughts
- **💪 Fitness** - Track your workouts and health
- **✨ Vision** - Set and achieve your goals

## Tech Stack

- **React Native** - Cross-platform mobile development
- **TypeScript** - Type-safe code
- **React Navigation** - App navigation
- **Zustand** - State management
- **AsyncStorage** - Local data persistence
- **Axios** - HTTP client

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn
- Xcode (for iOS) or Android Studio (for Android)
- React Native CLI

### Installation

```bash
npm install
```

### Running the App

**iOS:**
```bash
npm run ios
```

**Android:**
```bash
npm run android
```

**Development Server:**
```bash
npm start
```

## Project Structure

```
src/
├── App.tsx              # Main app component with navigation
├── features/            # Feature screens
│   ├── recovery/
│   ├── finances/
│   ├── tasks/
│   ├── journal/
│   ├── fitness/
│   └── vision/
├── store/               # State management (Zustand)
├── api/                 # API client and endpoints
└── utils/              # Utility functions
```

## Scripts

- `npm run ios` - Run iOS app
- `npm run android` - Run Android app
- `npm start` - Start development server
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript type checking

## License

MIT
