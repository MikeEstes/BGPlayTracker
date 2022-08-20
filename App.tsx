import React from 'react';

import Toast from 'react-native-toast-message';
import { RecoilRoot } from 'recoil';

import TestScreen from 'src/screens/TestScreen';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <TestScreen />
      <Toast />
    </RecoilRoot>
  );
};

export default App;
