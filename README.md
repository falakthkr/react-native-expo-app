# React Native Expo App

A comprehensive React Native application built with Expo, featuring authentication, navigation, and API integration.

## Features

- **Authentication Flow**: Login and Signup screens with session management
- **Navigation**: Stack navigation for auth flows, bottom tabs for main app
- **Session Management**: AsyncStorage for persistent login sessions
- **API Integration**: Axios configuration for backend communication
- **Clean Architecture**: Separated components, screens, and utilities

## Project Structure

```
react-native-expo-app/
├── components/          # Reusable UI components
├── screens/            # Screen components
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   ├── HomeScreen.js
│   └── ProfileScreen.js
├── navigation/         # Navigation configuration
│   └── AppNavigator.js
├── config/            # Configuration files
│   └── axios.js
├── utils/             # Utility functions
│   └── storage.js
├── assets/            # Images and static assets
├── App.js             # Main app component
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (macOS) or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-native-expo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
# or
npx expo start
```

4. Run on your preferred platform:
```bash
# iOS (requires macOS)
npm run ios

# Android
npm run android

# Web
npm run web
```

## Configuration

### API Configuration

Update the API base URL in `config/axios.js`:

```javascript
const api = axios.create({
  baseURL: 'https://your-api-url.com', // Change this to your API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### Authentication

The app uses AsyncStorage for session management. Key functions:

- `storeSession(token)`: Store user token
- `getSession()`: Retrieve stored token
- `clearSession()`: Clear stored token

## Usage

### Authentication Flow

1. **Login**: Users enter email/password, token is stored in AsyncStorage
2. **Session Check**: App checks for existing token on startup
3. **Navigation**: Authenticated users see Home/Profile tabs, others see Login/Signup
4. **Logout**: Clears token and returns to Login screen

### Navigation Structure

- **Unauthenticated**: Stack navigation with Login and Signup screens
- **Authenticated**: Bottom tab navigation with Home and Profile screens

## Customization

### Adding New Screens

1. Create screen component in `screens/`
2. Add to navigation in `navigation/AppNavigator.js`
3. Update navigation logic as needed

### Styling

All styles use StyleSheet for consistency and performance. Follow the existing pattern:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  // ... other styles
});
```

### API Integration

Replace the demo API calls in screens with real endpoints:

```javascript
// In LoginScreen.js
const response = await api.post('/login', { email, password });
await storeSession(response.data.token);
```

## Dependencies

- `@react-navigation/native`: Core navigation library
- `@react-navigation/stack`: Stack navigation
- `@react-navigation/bottom-tabs`: Bottom tab navigation
- `@react-native-async-storage/async-storage`: Local storage
- `axios`: HTTP client for API calls
- `react-native-screens`: Native navigation primitives
- `react-native-safe-area-context`: Safe area handling

## Development Guidelines

- Use functional components with hooks
- Keep styles simple and maintainable
- Separate concerns (components, screens, utils)
- Handle loading states and errors
- Use TypeScript for better type safety (optional)

## Troubleshooting

### Common Issues

1. **Navigation not working**: Ensure all navigation dependencies are installed
2. **AsyncStorage errors**: Check if AsyncStorage is properly linked
3. **API calls failing**: Verify base URL in axios config

### Debugging

- Use Expo DevTools for debugging
- Check console logs for errors
- Verify AsyncStorage values in React Native Debugger

## Contributing

1. Follow the existing code structure
2. Use meaningful commit messages
3. Test on both iOS and Android
4. Update documentation as needed

## License

This project is licensed under the MIT License. 

---

**Built by Falak Thackar**

I’m a full stack developer who builds clean, working products using React, Node.js, MongoDB, and React Native.  
Open to remote/hybrid roles and freelance MVP builds.

👉 [LinkedIn](https://linkedin.com/in/falakthackar) | [Email](mailto:falakthackar@gmail.com)
