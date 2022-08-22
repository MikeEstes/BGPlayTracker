import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { RecoilRoot } from 'recoil';

import AuthContainer from 'src/navigation/RootNavigator';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthContainer />
        </NavigationContainer>
        <Toast />
      </SafeAreaProvider>
    </RecoilRoot>
  );
};

export default App;
