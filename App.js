import React ,{useRef,useState, useEffect } from 'react';
import { View, Text,StyleSheet,FlatList,ScrollView} from 'react-native';
import {Dataset} from './data/dataset.js';
import {Data} from './data/datafetch.js';
export const App = ()=> {
  const [country,setcountry] = useState("National");
  const [keyword,setkeyword] =useState('');
  const [category,setcategory]=useState('')
  const [data, setData] = useState(null);
  return (
     <View >
       <Dataset country ={setcountry} keyword ={setkeyword} category ={setcategory}/>
       <Data nationality ={country} keyword ={keyword} category ={category} storeData={setData} />
     </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  item: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  source: {
    fontSize: 14,
    fontStyle: 'italic',
    color: 'gray',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
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