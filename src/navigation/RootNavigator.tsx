import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TestScreen from 'src/screens/TestScreen';

const StackNavigator = createNativeStackNavigator();

const AuthContainer: React.FC = () => {
  return <RootNavigator />;
};

const RootNavigator: React.FC = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen component={TestScreen} name={'Test Screen'} />
    </StackNavigator.Navigator>
  );
};

export default AuthContainer;
