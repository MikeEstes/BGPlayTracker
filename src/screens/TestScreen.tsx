import React from 'react';
import { Text, Button, View } from 'react-native';

const TestScreen: React.FC = () => {
  const message = 'Heeey!';

  return (
    <View>
      <Text>{message}</Text>
      <Button title={'Push Me'} />
    </View>
  );
};

export default TestScreen;
