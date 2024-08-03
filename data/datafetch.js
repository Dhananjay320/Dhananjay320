import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Text } from 'react-native';
import Card from './Card'; // Import the Card component

export const Data = ({ keyword = '', category = '', nationality, storeData }) => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let tempUrl = `https://newsapi.org/v2/top-headlines`;

    if (nationality === 'National') {
      tempUrl += `?country=in`;
    }
    if (keyword) {
      tempUrl += (tempUrl.includes('?') ? '&' : '?') + `q=${keyword}`;
    }
    if (category) {
      tempUrl += (tempUrl.includes('?') ? '&' : '?') + `category=${category}`;
    }
    tempUrl += (tempUrl.includes('?') ? '&' : '?') + `language=en&apiKey=494fb959206e4f1c8e35cdc105241937`;
    setUrl(tempUrl);
  }, [keyword, category, nationality]);

  useEffect(() => {
    if (url) {
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log('API response:', json); // Log the API response
          setData(json.articles || []);
          setLoading(false);
          setError(null);
          if (storeData) {
            storeData(json.articles); // Pass the fetched data to the provided function
          }
        })
        .catch((error) => {
          console.error('Fetch error:', error); // Log the error message
          setLoading(false);
          setError('Failed to fetch data');
        });
    }
  }, [url]);

  console.log('Constructed URL:', url); // Log the constructed URL

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No articles found.</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Card item={item} />} // Render Card component
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
});
