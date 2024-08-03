import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const Card = ({ item }) => {
  const { urlToImage, title, publishedAt, description, url, author } = item;

  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      {urlToImage ? <Image source={{ uri: urlToImage }} style={styles.image} /> : null}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>
        {author ? <Text style={styles.author}>By: {author}</Text> : null}
        <Text style={styles.date}>{new Date(publishedAt).toLocaleDateString()}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow for iOS
    shadowOpacity: 0.3, // Shadow for iOS
    shadowRadius: 3, // Shadow for iOS
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  header: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default Card;
