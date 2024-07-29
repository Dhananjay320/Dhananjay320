import React ,{useRef,useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import {Dataset} from './data/dataset.js'
export const App = ()=> {
  const [country,setcountry] = useState(true);
  const [keyword,setkeyword] =useState('');
  const [category,setcategory]=useState('')
  return (
     <View >
       <Dataset country ={country} keyword ={keyword} categary ={category}/>
     </View>
  );
}