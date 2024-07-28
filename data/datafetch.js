
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export const Data = ({keyword='', category='', nationality}) =>  {
  const [url, setUrl] = useState('https://newsapi.org/v2/');

  useEffect(() => {
    let tempUrl = `https://newsapi.org/v2/top-headlines`;

    if (nationality) {
      tempUrl += `?country=in`;
    }
    if (keyword) {
      tempUrl += (tempUrl.includes('?') ? '&' : '?') + `q=${keyword}`;
    }

    if (category) {
      tempUrl += (tempUrl.includes('?') ? '&' : '?') + `category=${category}`;
    }

    setUrl(tempUrl);
  }, [keyword, category, nationality]);
   consol.log(url);
  return (
    <View>
      <Text>{url}</Text>
    </View>
  );
};
