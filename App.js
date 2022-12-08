/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const App: () => Node = () => {
  return (
    <FlatList
      data={Array.from(Array(50).keys())}
      renderItem={({item}) => (
        <View>
          <Text
            style={{
              backgroundColor: 'red',
              marginBottom: 16,
              paddingVertical: 32,
            }}>
            {item}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
