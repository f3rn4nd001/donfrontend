import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'don.front.app',
  appName: 'donfrontend',
  webDir: 'dist/donfrontend',
  server: {
    androidScheme: 'https'
  }
};

export default config;
