import React, { useState } from 'react';
import {
  Text,
  Button,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

import { search } from 'src/api/search';
import { IBoardGame } from 'src/common/types';

const TestScreen: React.FC = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [data, setData] = useState<IBoardGame[]>([]);

  return (
    <View style={styles.container}>
      <TextInput
        value={searchTerm}
        onChangeText={(newText) => setsearchTerm(newText)}
      />
      <Button
        disabled={searchTerm === ''}
        title={'Search'}
        onPress={async () => {
          const result = await search(searchTerm);
          setData(result);
        }}
      />
      <ScrollView style={styles.resultContainer}>
        {data.map((boardgame) => {
          return (
            <View
              key={boardgame.name + boardgame.yearpublished}
              style={styles.resultCard}
            >
              <Text>{boardgame.name}</Text>
              <Text>{boardgame.yearpublished}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultCard: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  resultContainer: {
    borderColor: 'red',
    borderWidth: 1,
    flex: 1,
  },
});

export default TestScreen;
