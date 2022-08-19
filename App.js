import React from 'react';
import { SafeAreaView } from 'react-native';
import { RecoilRoot } from 'recoil';

import TestScreen from './src/screens/TestScreen';

const App = () => {
  return (
    <RecoilRoot>
      <SafeAreaView>
        <TestScreen />
      </SafeAreaView>
    </RecoilRoot>
  );
};

export default App;
