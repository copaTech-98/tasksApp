import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.focustask.io',
  appName: 'FocusTask',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      "launchShowDuration": 0
    },
    GoogleAuth: {
      scopes: [
        "profile",
        "email"
      ],
      serverClientId: "806940456122-vs0lt13vtcaukcapft1fuji5kj7k0moh.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
