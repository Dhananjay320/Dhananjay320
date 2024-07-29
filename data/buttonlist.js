import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, TouchableWithoutFeedback, Text, Modal, Dimensions, findNodeHandle } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const ItemListDropdown = ({ items, buttonTitle,dataset}) => {
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState(buttonTitle);
  const [buttonPosition, setButtonPosition] = useState(null);
  const buttonRef = useRef(null);

  const toggleList = () => {
    setShowList(!showList);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item.title);
    toggleList();
  };

  const handleButtonPress = () => {
    buttonRef.current.measure((fx, fy, width, height, px, py) => {
      setButtonPosition({ px, py, width, height });
      toggleList();
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleButtonPress}
        ref={buttonRef}
      >
        <Text style={styles.buttonText}>{selectedItem}</Text>
      </TouchableOpacity>
      {showList && buttonPosition && (
        <Modal
          transparent={true}
          animationType="none"
          visible={showList}
          onRequestClose={toggleList}
        >
          <TouchableWithoutFeedback onPress={toggleList}>
            <View style={styles.overlay}>
              <TouchableWithoutFeedback>
                <View
                  style={[
                    styles.listContainer,
                    {
                      top: buttonPosition.py + buttonPosition.height,
                      left: buttonPosition.px,
                      width: buttonPosition.width,
                    },
                  ]}
                >
                  <ScrollView>
                    {items.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={styles.item}
                        onPress={() => handleSelectItem(item)}
                      >
                        <Text style={styles.itemText}>{item.title}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  button: {
    height: 50,
    width: screenWidth * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  listContainer: {
    position: 'absolute',
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
