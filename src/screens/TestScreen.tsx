import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';

import Toast from 'react-native-toast-message';
import { IBoardGame } from 'src/common/types';
import Colors from 'src/styles/Colors';
import boardGameData from 'src/utils/boardGameData';

const TestScreen: React.FC = () => {
  const [searchTerm, setsearchTerm] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState(boardGameData);
  const [masterDataSource] = useState(boardGameData);

  const searchFilter = (text: string): string | void => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setsearchTerm(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setsearchTerm(text);
    }
  };

  // TODO: Custom Component
  const ItemView = ({ item }): JSX.Element => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.name}
      </Text>
    );
  };

  // TODO: Custom Component
  const ItemSeperatorView = (): JSX.Element => {
    return <View style={styles.itemSeperatorStyle} />;
  };

  const getItem = (item: IBoardGame): void => {
    Toast.show({
      text1: 'Title: ' + item.name,
      text2: 'ID: ' + item.id,
      type: 'info',
    });
  };

  // TODO: Custom Components
  return (
    <View style={styles.container}>
      <TextInput
        clearButtonMode={'always'}
        placeholder={'Search for a game'}
        style={styles.textInputStyle}
        underlineColorAndroid={'transparent'}
        value={searchTerm}
        onChangeText={(newText) => searchFilter(newText)}
      />
      <FlatList
        data={filteredDataSource}
        ItemSeparatorComponent={ItemSeperatorView}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  itemSeperatorStyle: {
    backgroundColor: '#C8C8C8',
    height: 0.5,
    width: '100%',
  },
  itemStyle: {
    padding: 10,
  },
  resultCard: {
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingHorizontal: 10,
  },
  textInputStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#009688',
    borderWidth: 1,
    height: 40,
    margin: 5,
    paddingLeft: 20,
  },
});

export default TestScreen;
