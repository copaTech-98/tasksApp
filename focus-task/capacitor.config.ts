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
      serverClientId: "806940456122-h8g6iveqt8h0ilhn2u03k0jl2abhvgn1.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
