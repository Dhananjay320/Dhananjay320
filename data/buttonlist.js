import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';

const ItemListDropdown = ({ items, buttonTitle }) => {
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(buttonTitle);

  const toggleList = () => {
    setShowList(!showList);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item.title);
    toggleList();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleList}>
        <Text style={styles.buttonText}>{selectedItem}</Text>
      </TouchableOpacity>
      {showList && (
        <TouchableWithoutFeedback onPress={toggleList}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <View style={styles.listContainer}>
                <ScrollView>
                  {items.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.item} onPress={() => handleSelectItem(item)}>
                      <Text style={styles.itemText}>{item.title}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingHorizontal: 20,
    width: 200, // Set a fixed width for the button
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    position: 'absolute',
    top: 50, // Adjust according to your button's height
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  listContainer: {
    position: 'absolute',
    top: 0,
    width: 200, // Match the button's width
    backgroundColor: '#fff',
    borderRadius: 5,
    maxHeight: 200, // Adjust according to the required height
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default ItemListDropdown;
