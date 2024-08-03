import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
      onSearch(searchValue);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Enter search term"
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
});
